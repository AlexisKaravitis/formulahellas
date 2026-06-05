import { redirect } from 'next/navigation';

// The 2026 competition is the only edition; send /events to /events/2026.
export default function EventsPage() {
  redirect('/events/2026');
}
