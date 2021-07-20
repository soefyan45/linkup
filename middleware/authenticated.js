export default function({ store, route, redirect}) {
  // const blockedRoute = /\/order|user|keranjang|alamat|chart|transaksi\/*/g;
  const blockedRoute = /\/members\/*/g;
  const loginRoute = /\/auth\/*/g;
  // const user = supabase.auth.user();
  const user = localStorage['supabase.auth.token'];
  console.log("Assalamualaikum")
  if (!user && route.path.match(blockedRoute)) {
    redirect("/auth");
  }
  if (user && route.path.match(loginRoute)) {
    redirect("/members");
  }
}
