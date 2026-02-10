import React, { useState } from 'react';
import './LivingBook.css';

export interface ClassEntry {
  id: number;
  name: string;
  hobbies: string;
  motto: string;
  favoriteBook: string;
}

const initialEntries: ClassEntry[] = [
  {
    id: 1,
    name: 'Emma Rodriguez',
    hobbies: 'Photography, hiking, playing guitar',
    motto: 'Every day is a chance to learn something new',
    favoriteBook: 'The Alchemist by Paulo Coelho',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    hobbies: 'Video game design, robotics, skateboarding',
    motto: 'Code with purpose, create with passion',
    favoriteBook: 'Ready Player One by Ernest Cline',
  },
];

function EntryName({ name, joinDate }: { name: string; joinDate?: string }) {
  const [showExtra, setShowExtra] = useState(false);
  return (
    <h2
      className="entry-name"
      onMouseEnter={() => setShowExtra(true)}
      onMouseLeave={() => setShowExtra(false)}
    >
      {name}
      {showExtra && joinDate && (
        <span className="entry-name-extra"> · {joinDate}</span>
      )}
    </h2>
  );
}

function EntryHobby({ hobbies }: { hobbies: string }) {
  const list = hobbies.split(',').map((h) => h.trim());
  return (
    <div className="entry-hobby">
      <span className="entry-label">Hobbies</span>
      <ul>
        {list.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}

function EntryMotto({ motto }: { motto: string }) {
  return (
    <blockquote className="entry-motto">
      <span className="entry-label">Motto</span>
      "{motto}"
    </blockquote>
  );
}

function EntryBook({ favoriteBook }: { favoriteBook: string }) {
  return (
    <div className="entry-book">
      <span className="entry-label">Favorite book</span>
      <p className="entry-book-title">{favoriteBook}</p>
    </div>
  );
}

function BookEntry({ entry }: { entry: ClassEntry }) {
  const joinDate = 'Joined Fall 2024';
  return (
    <article className="book-entry">
      <EntryName name={entry.name} joinDate={joinDate} />
      <EntryHobby hobbies={entry.hobbies} />
      <EntryMotto motto={entry.motto} />
      <EntryBook favoriteBook={entry.favoriteBook} />
    </article>
  );
}

export function BookPage() {
  const [entries] = useState<ClassEntry[]>(initialEntries);

  return (
    <div className="book-page">
      <header className="book-page-header">
        <h1>Living Book of Our Class</h1>
        <p className="book-page-subtitle">
          Get to know your classmates — names, hobbies, mottos, and favorite books.
        </p>
      </header>
      <section className="book-entries">
        {entries.map((entry) => (
          <BookEntry key={entry.id} entry={entry} />
        ))}
      </section>
    </div>
  );
}
