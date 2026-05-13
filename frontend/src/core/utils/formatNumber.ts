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

export function formatPrice(num: number): string {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
