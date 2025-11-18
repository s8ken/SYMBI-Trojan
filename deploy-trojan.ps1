# SYMBI-Trojan Deployment Script
Write-Host "🚀 Preparing SYMBI-Trojan for Vercel deployment..." -ForegroundColor Green

# Create deployment directory structure
New-Item -ItemType Directory -Force -Path "dist-trojan" | Out-Null
New-Item -ItemType Directory -Force -Path "api" | Out-Null

# Copy essential files for deployment
Copy-Item "index-trojan-simple.html" "index.html" -Force
Copy-Item "src/main-trojan-simple.tsx" "src/main.tsx" -Force
Copy-Item "package-trojan-deploy.json" "package.json" -Force
Copy-Item "vite.config.trojan-final.ts" "vite.config.ts" -Force
Copy-Item "tailwind.config.trojan.js" "tailwind.config.js" -Force
Copy-Item "postcss.config.trojan.js" "postcss.config.js" -Force

# Create environment variables template
@"
# Solana Configuration
VITE_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
VITE_SYMBI_TOKEN_ADDRESS=YOUR_SYMBI_TOKEN_MINT_ADDRESS

# API Configuration
VITE_API_URL=https://your-api-url.com

# Analytics
VITE_GA_TRACKING_ID=YOUR_GA_TRACKING_ID
"@ | Out-File -FilePath ".env.example" -Encoding UTF8

Write-Host "✅ Deployment preparation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Yellow
Write-Host "1. Set up your Vercel account at https://vercel.com" -ForegroundColor White
Write-Host "2. Install Vercel CLI: npm i -g vercel" -ForegroundColor White
Write-Host "3. Run: vercel --prod" -ForegroundColor White
Write-Host "4. Configure environment variables in Vercel dashboard" -ForegroundColor White
Write-Host "5. Add custom domain: symbi.space" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Useful commands:" -ForegroundColor Cyan
Write-Host "vercel --prod              # Deploy to production" -ForegroundColor White
Write-Host "vercel --env               # Manage environment variables" -ForegroundColor White
Write-Host "vercel domains add symbi.space  # Add custom domain" -ForegroundColor White