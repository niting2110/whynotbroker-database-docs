# Database Documentation Test Script for Windows
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Database Docs Generator Test" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Check if we have a connection string
\ = "..\.env.test"
if (Test-Path \) {
    Write-Host "Found .env.test file" -ForegroundColor Green
    
    # Read and set environment variables
    Get-Content \ | ForEach-Object {
        if (\ -match '^([^=]+)=(.*)\$') {
            \ = \[1].Trim()
            \ = \[2].Trim().Trim('"')
            [Environment]::SetEnvironmentVariable(\, \)
            Write-Host "  Set: \ = ****" -ForegroundColor Gray
        }
    }
} else {
    Write-Host "No .env.test file found" -ForegroundColor Yellow
    Write-Host "Create one with: DATABASE_URL='your-connection-string'" -ForegroundColor Yellow
}

# Check if DATABASE_URL is set
if (-not \postgresql://postgres:OmQaRKiDrIXQXLzx@db.ryhdgpkvkcedplbwgnld.supabase.co:5432/postgres) {
    Write-Host "
⚠️  DATABASE_URL is not set" -ForegroundColor Red
    Write-Host "Please add it to .env.test or set it manually:" -ForegroundColor Yellow
    Write-Host "Example: DATABASE_URL='postgresql://user:pass@host:5432/db'" -ForegroundColor Gray
    
    # Ask for connection details
    \ = Read-Host "Enter database host (or press Enter to skip)"
    if (\) {
        \ = Read-Host "Enter port (default: 5432)"
        \ = Read-Host "Enter database name"
        \ = Read-Host "Enter username"
        \ = Read-Host "Enter password" -AsSecureString
        
        # Convert secure string to plain text
        \ = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR(\)
        \ = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto(\)
        
        \postgresql://postgres:OmQaRKiDrIXQXLzx@db.ryhdgpkvkcedplbwgnld.supabase.co:5432/postgres = "postgresql://\:\@\:\/\"
        
        # Clear password from memory
        [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR(\)
    }
}

# Set default SSL to false for testing
if (-not \true) {
    \true = "false"
}

# Set output directory
if (-not \) {
    \ = "..\docs"
}

# Show configuration
Write-Host "
⚙️  Configuration:" -ForegroundColor Cyan
Write-Host "  DATABASE_URL: " -NoNewline
if (\postgresql://postgres:OmQaRKiDrIXQXLzx@db.ryhdgpkvkcedplbwgnld.supabase.co:5432/postgres) {
    # Hide password in display
    \ = \postgresql://postgres:OmQaRKiDrIXQXLzx@db.ryhdgpkvkcedplbwgnld.supabase.co:5432/postgres -replace ':[^:@]+@', ':****@'
    Write-Host "\" -ForegroundColor Green
} else {
    Write-Host "Not set" -ForegroundColor Red
}
Write-Host "  DB_SSL: \true" -ForegroundColor Green
Write-Host "  OUTPUT_DIR: \" -ForegroundColor Green

# Ask to proceed
Write-Host "
🚀 Ready to generate documentation?" -ForegroundColor Yellow
\ = Read-Host "Press Y to continue, any other key to cancel"
if (\ -ne 'Y' -and \ -ne 'y') {
    Write-Host "Cancelled" -ForegroundColor Gray
    exit
}

# Run the generator
Write-Host "
📝 Generating documentation..." -ForegroundColor Yellow
try {
    node generate-complete-docs.js
    
    if (\0 -eq 0) {
        Write-Host "
✅ Documentation generated successfully!" -ForegroundColor Green
        
        # Check what was created
        if (Test-Path "..\docs") {
            Write-Host "
📁 Generated files:" -ForegroundColor Cyan
            Get-ChildItem "..\docs" -Recurse -File | ForEach-Object {
                Write-Host "  \" -ForegroundColor Gray
            }
        }
    } else {
        Write-Host "
❌ Script failed with exit code: \0" -ForegroundColor Red
    }
} catch {
    Write-Host "
💥 Error: \" -ForegroundColor Red
}

# Cleanup
Write-Host "
🔒 Cleaning up environment variables..." -ForegroundColor Gray
Remove-Item Env:\DATABASE_URL -ErrorAction SilentlyContinue
Remove-Item Env:\DB_SSL -ErrorAction SilentlyContinue
Remove-Item Env:\OUTPUT_DIR -ErrorAction SilentlyContinue
