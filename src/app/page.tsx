import { redirect } from 'next/navigation';
import './page.module.css';

export default function RootPage() {
  redirect('/home');
}
