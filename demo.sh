#!/bin/bash

echo "🏜️  Shai-Hulud Vulnerability Scanner Demo"
echo "========================================"
echo ""

# Define vulnerability patterns to search for
VULN_PATTERNS=(
  "shai-hulud"
  "Shai-Hulud"
  "SHAI-HULUD"
  "spice.*api.*key"
  "sandworm.*sql"
  "arrakis.*secret"
)

test_file() {
    local file=$1
    local expected_result=$2
    
    echo "🔍 Testing: $file"
    echo "Expected: $expected_result"
    
    FOUND_VULNS=0
    
    for pattern in "${VULN_PATTERNS[@]}"; do
        matches=$(grep -i "$pattern" "$file" 2>/dev/null || true)
        if [ ! -z "$matches" ]; then
            FOUND_VULNS=$((FOUND_VULNS + 1))
        fi
    done
    
    if [ $FOUND_VULNS -gt 0 ]; then
        echo "Result: ❌ $FOUND_VULNS vulnerability pattern(s) detected"
        if [ "$expected_result" = "PASS" ]; then
            echo "❌ UNEXPECTED: File should have passed but failed!"
        else
            echo "✅ EXPECTED: File correctly flagged as vulnerable"
        fi
    else
        echo "Result: ✅ No vulnerability patterns detected"
        if [ "$expected_result" = "FAIL" ]; then
            echo "❌ UNEXPECTED: File should have failed but passed!"
        else
            echo "✅ EXPECTED: File correctly identified as secure"
        fi
    fi
    
    echo ""
}

echo "Testing vulnerable application..."
test_file "vulnerable-app.js" "FAIL"

echo "Testing secure application..."
test_file "secure-app.js" "PASS"

echo "Demo complete! 🎉"
echo ""
echo "The GitHub Action workflow uses the same scanning logic"
echo "to automatically block PRs containing these vulnerabilities."