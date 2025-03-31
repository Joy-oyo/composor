const productDatabase = {
    callkit: {
        name: "Call Kit",
        description: "Complete UI components for voice/video calls",
        features: [
            "Ready-to-use UI components for audio/video calls",
            "Customizable interface elements",
            "Support for one-to-one and group calls",
            "Built-in call controls and status displays"
        ],
        benefits: "Reduce development time by 70% with pre-built UI components",
        useCase: "Perfect for applications requiring voice/video call functionality"
    },
    conferencekit: {
        name: "Conference Kit",
        description: "UI solution for virtual conferences",
        features: [
            "Complete conference room UI components",
            "Support for large-scale video conferences",
            "Screen sharing and presentation tools",
            "Interactive whiteboard features"
        ],
        benefits: "Enterprise-grade conference solution with minimal integration effort",
        useCase: "Ideal for virtual meetings, webinars, and online education platforms"
    },
    // Add other products similarly...
};

function getProductInfo(productId) {
    return productDatabase[productId] || null;
}

function getProductDetailsList(productIds) {
    return productIds.map(id => {
        const product = getProductInfo(id);
        return product ? `
• ${product.name}:
  - ${product.description}
  - Key Features: ${product.features[0]}, ${product.features[1]}
  - ${product.benefits}` : '';
    }).filter(Boolean).join('\n\n');
} 