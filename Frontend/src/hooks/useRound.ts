export function useRound(num: number): number {
    const roundedNum = +num.toFixed(1);
    return roundedNum;
  }