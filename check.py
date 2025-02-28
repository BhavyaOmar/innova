def max_profit(years, r1, r3, r5):
    dp = [0]*(years + 1)
    dp[0] = 1  # Base case (starting capital)
    
    for y in range(1, years + 1):
        dp[y] = dp[y - 1] * r1 if y >= 1 else 0
        if y >= 3:
            dp[y] = max(dp[y],dp[y - 3]*r3)
        if y >= 5:
            dp[y] = max(dp[y],dp[y - 5]*r5)
    
    return dp[years]

# Example Usage:
years=10
r1,r3,r5=4,6.5,6.9

profit=max_profit(years, r1, r3, r5)
print(f"Maximum profit after {years} years: {profit}")

