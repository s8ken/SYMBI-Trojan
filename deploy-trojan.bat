# SYMBI-Trojan Deployment Script
# This script prepares the project for Vercel deployment

echo "🚀 Preparing SYMBI-Trojan for Vercel deployment..."

# Create deployment directory structure
mkdir -p dist-trojan
mkdir -p api

# Copy essential files for deployment
cp index-trojan-simple.html index.html
cp src/main-trojan-simple.tsx src/main.tsx
cp package-trojan-deploy.json package.json
cp vite.config.trojan-final.ts vite.config.ts
cp tailwind.config.trojan.js tailwind.config.js
cp postcss.config.trojan.js postcss.config.js

# Create environment variables template
cat > .env.example << 'EOF'
# Solana Configuration
VITE_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
VITE_SYMBI_TOKEN_ADDRESS=YOUR_SYMBI_TOKEN_MINT_ADDRESS

# API Configuration
VITE_API_URL=https://your-api-url.com

# Analytics
VITE_GA_TRACKING_ID=YOUR_GA_TRACKING_ID
EOF

echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set up your Vercel account at https://vercel.com"
echo "2. Install Vercel CLI: npm i -g vercel"
echo "3. Run: vercel --prod"
echo "4. Configure environment variables in Vercel dashboard"
echo "5. Add custom domain: symbi.space"
echo ""
echo "🔗 Useful commands:"
echo "vercel --prod              # Deploy to production"
echo "vercel --env               # Manage environment variables"
echo "vercel domains add symbi.space  # Add custom domain"