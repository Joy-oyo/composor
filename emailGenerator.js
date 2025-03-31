class EmailGenerator {
    constructor(productDatabase) {
        this.productDatabase = productDatabase;
    }

    generateEmail(formData) {
        const {
            clientName,
            selectedProducts,
            meetingPreference,
            timezone,
            preferredTime,
            additionalNotes,
            senderName,
            senderTitle,
            senderEmail
        } = formData;

        const productDetails = getProductDetailsList(selectedProducts);
        const meetingText = this.getMeetingText(meetingPreference, timezone, preferredTime);
        const currentDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        return `Subject: Tencent Cloud Solutions Discussion - Follow-up Information

Dear ${clientName},

I hope this email finds you well. Thank you for your interest in Tencent Cloud's solutions. As discussed, I'm following up with detailed information about the products that align with your requirements.

SOLUTION OVERVIEW
${productDetails}

NEXT STEPS
${meetingText}

${additionalNotes ? `ADDITIONAL INFORMATION
${additionalNotes}

` : ''}COMMITMENT TO YOUR SUCCESS
At Tencent Cloud, we are committed to providing you with the best possible solutions and support. Our team of experts will work closely with you to ensure successful implementation and ongoing optimization of your chosen solutions.

Please don't hesitate to reach out if you have any questions or need additional information. I look forward to our discussion and the opportunity to support your business objectives.

Best regards,
${senderName}
${senderTitle}
Tencent Cloud
${senderEmail}

This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.`;
    }

    getMeetingText(preference, timezone, preferredTime) {
        if (preference === 'specific') {
            return "To discuss these solutions in detail, I've scheduled a meeting as per your selected time slot. You will receive a calendar invitation shortly with the meeting details.";
        } else {
            return `To provide you with a comprehensive overview of these solutions, I would like to schedule a detailed discussion. Based on your preference, I will arrange a meeting during ${preferredTime} ${timezone}. You will receive a calendar invitation with proposed time slots shortly.`;
        }
    }
} 