import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect root to the new /login page so opening http://localhost:3000
  // shows the login screen you asked for.
  redirect('/login');
}
