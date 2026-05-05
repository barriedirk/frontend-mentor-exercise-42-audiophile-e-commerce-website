export function formatNumber(num: number): string {
  const formatter = new Intl.NumberFormat("en-US");

  return formatter.format(num);
}

export function formatCurrency(num: number): string {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return currencyFormatter.format(num);
}
