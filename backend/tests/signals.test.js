const { generateSignal, calculateEntryPrice, calculateStopLoss, calculateTakeProfit } = require('../signals');

describe('Trading Signals Logic', () => {
    test('should generate BUY signal with confidence level between 70 and 100', () => {
        const result = generateSignal(80);
        expect(result.signal).toBe('BUY');
        expect(result.confidence).toBeGreaterThanOrEqual(70);
        expect(result.confidence).toBeLessThanOrEqual(100);
    });

    test('should generate SELL signal with confidence level between 70 and 100', () => {
        const result = generateSignal(75);
        expect(result.signal).toBe('SELL');
        expect(result.confidence).toBeGreaterThanOrEqual(70);
        expect(result.confidence).toBeLessThanOrEqual(100);
    });

    test('should calculate entry price correctly', () => {
        const price = 100;
        const leverage = 10;
        const entryPrice = calculateEntryPrice(price, leverage);
        expect(entryPrice).toBe(10);
    });

    test('should calculate stop loss correctly', () => {
        const entryPrice = 100;
        const stopLossPercentage = 5;
        const stopLossPrice = calculateStopLoss(entryPrice, stopLossPercentage);
        expect(stopLossPrice).toBe(95);
    });

    test('should calculate take profit correctly', () => {
        const entryPrice = 100;
        const takeProfitPercentage = 10;
        const takeProfitPrice = calculateTakeProfit(entryPrice, takeProfitPercentage);
        expect(takeProfitPrice).toBe(110);
    });
});