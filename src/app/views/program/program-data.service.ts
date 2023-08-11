import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramDataService {

  private days = [
    {
      id: 1,
      name: 'Τρίτη 05/09',
      date: new Date(2023, 7, 10), // September 5, 2023 (months are 0-indexed in JS)
      events: [
        {
          type: 'concerts',
          items: [
            { time: '20:00', description: '"Zero" της Φένιας Χρήστου, με την ίδια (πιάνο, τραγούδι και φωνητικά), τον Alexis Bove (βιολοντσέλο) και τον Χρήστο Γαρμπιδάκη (laptop)' },
            { time: '21:00', description: 'Σταύρος Λάντσιας (πιάνο)' }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Τετάρτη 06/09',
      date: new Date(2023, 7, 11),
      events: [
        {
          type: 'workshops',
          items: [
            { time: '12:00', description: '"Extended cello technics and its use in the 20th and 21st century works", με τον Alexis Bove' },
            { time: '14:00', description: '"Πιάνο & Ηλεκτρονικά Μέσα (Ableton Live, Virtual Instruments...) στη μουσική παραγωγή", με τον Χρήστο Γαρμπιδάκη, τον Νίκο Σωτηρόπουλο και τη Φένια Χρήστου' }
          ]
        },
        {
          type: 'concerts',
          items: [
            { time: '21:00', description: 'Μελοποιήσεις του Άγγελου Θεοδωράκη-Παπαγγελίδη πάνω σε ποίηση του Ανδρέα Κάλβου, του Διονύσιου Σολωμού και του Λόρδου Μπάιρον' },
            { time: '21:30', description: 'Μελοποιήσεις, τραγούδια και συνθέσεις της Φένιας Χρήστου με την ίδια (πιάνο) και τον Alexis Bove (βιολοντσέλο)' }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Πέμπτη 07/09',
      date: new Date(2023, 7, 12),
      events: [
        {
          type: 'workshops',
          items: [
            { time: '12:00', description: '"Τραγουδοποιία - Μελοποίηση" με τη Φένια Χρήστου' },
          ]
        },
        {
          type: 'concerts',
          items: [
            { time: '21:00', description: 'Σαβίνα Γιαννάτου (τραγούδι και φωνητικά) / Σπύρος Μάνεσης (πιάνο)' },
          ]
        }
      ]
    }
  ];

  constructor() { }

  getDays() {
    return this.days;
  }
}
