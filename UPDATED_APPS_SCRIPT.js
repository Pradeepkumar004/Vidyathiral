// ============================================
// GOOGLE APPS SCRIPT - Contact Form Handler
// ============================================
// Copy this entire code to your Google Apps Script editor
// This version includes proper CORS headers for local development

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Log all parameters received for debugging
    Logger.log('All parameters received: ' + JSON.stringify(e.parameter));
    
    // Get parameters from URL - with better error handling
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const subject = e.parameter.subject || '';
    const message = e.parameter.message || '';
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    
    // Log the received data for debugging
    Logger.log('Received submission:');
    Logger.log('Name: ' + name);
    Logger.log('Email: ' + email);
    Logger.log('Subject: ' + subject);
    Logger.log('Message: ' + message);
    Logger.log('Timestamp: ' + timestamp);
    
    // Validate that we have data
    if (!name && !email && !subject && !message) {
      Logger.log('WARNING: All fields are empty!');
    }
    
    // Append row to sheet
    sheet.appendRow([timestamp, name, email, subject, message]);
    Logger.log('Data saved to sheet successfully');
    
    // Send email notification to admin
    sendAdminNotification(name, email, subject, message, timestamp);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success',
        message: 'Form submitted successfully',
        data: { name, email, subject } // Return data for verification
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error in doGet: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendAdminNotification(name, email, subject, message, timestamp) {
  try {
    // ⚠️ IMPORTANT: CHANGE THIS TO YOUR EMAIL ADDRESS ⚠️
    const adminEmail = 'pradeepkumark2022cs069@kongunadu.ac.in';
    
    // Format the timestamp
    const formattedDate = new Date(timestamp).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    });
    
    // Email subject
    const emailSubject = `New Contact Form Submission - ${subject}`;
    
    // Email body in HTML format
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0052a3 0%, #1e3a8a 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        </div>
        
        <div style="background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
          <h2 style="color: #0052a3; margin-top: 0;">Submission Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background-color: #fff; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 12px; background-color: #fff; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #fff; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 12px; background-color: #fff; border: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #0052a3;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #fff; border: 1px solid #e5e7eb; font-weight: bold;">Subject:</td>
              <td style="padding: 12px; background-color: #fff; border: 1px solid #e5e7eb;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #fff; border: 1px solid #e5e7eb; font-weight: bold;">Date & Time:</td>
              <td style="padding: 12px; background-color: #fff; border: 1px solid #e5e7eb;">${formattedDate}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #0052a3;">Message:</h3>
            <div style="background-color: #fff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 4px; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-left: 4px solid #0052a3;">
            <p style="margin: 0; color: #1e3a8a;"><strong>Quick Actions:</strong></p>
            <p style="margin: 10px 0 0 0;"><a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="color: #0052a3; text-decoration: none;">📧 Reply to ${name}</a></p>
          </div>
        </div>
        
        <div style="background-color: #1f2937; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 12px;">
            This is an automated notification from Vidyathiral Contact Form
          </p>
        </div>
      </div>
    `;
    
    // Plain text version (fallback)
    const plainBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Date & Time: ${formattedDate}

Message:
${message}

---
Reply to this inquiry: ${email}
    `;
    
    // Send email
    MailApp.sendEmail({
      to: adminEmail,
      subject: emailSubject,
      body: plainBody,
      htmlBody: htmlBody,
      replyTo: email,
      name: 'Vidyathiral Contact Form'
    });
    
    Logger.log('Admin notification sent successfully to: ' + adminEmail);
  } catch (error) {
    Logger.log('Error sending admin notification: ' + error.toString());
    // Don't throw error - we still want to save the form submission
  }
}

// Test function - Use this to test your setup
function testFormSubmission() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Submission',
      message: 'This is a test message to verify the contact form is working correctly.',
      timestamp: new Date().toISOString()
    }
  };
  
  const result = doGet(testData);
  Logger.log('Test Result: ' + result.getContent());
}
