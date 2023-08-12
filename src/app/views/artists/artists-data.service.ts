import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistsDataService {

  private artists = [
    {
      id: 1,
      name: 'Φένια Χρήστου',
      website: 'https://www.feniachristou.com',
      description: 'Γεννήθηκε στη Θεσσαλονίκη, ζει στην Αθήνα. Συνθέτει, μελοποιεί, ερμηνεύει, αυτοσχεδιάζει και συχνά γράφει τους στίχους των τραγουδιών της. Έχει συνθέσει μουσική και τραγούδια είτε ανεξάρτητα είτε για θεατρικές, παιδικές ή μουσικοποιητικές παραστάσεις σε συνεργασία με διάφορους φορείς ανά την Ελλάδα όπως Onassis cultural centre, ERT, Κ.Θ.Β.Ε κ.α. To 2014 έλαβε το Α’ Βραβείο δημιουργίας τραγουδιού με το τραγούδι της σε διαγωνισμό του ιδρύματος Ωνάση. Το 2018 κυκλοφόρησε από τον Μετρονόμο το album Εl3ven το οποίο αποτελεί την πρώτη ολοκληρωμένη δισκογραφική της δουλειά. Έχει συνεργαστεί με το Φεστιβάλ Δελφών το 2018 καθώς και με το Κ.Θ. Β. Ε. και το ΥΠ.ΠΟ.Α το 2020. Πρόσφατα, κλήθηκε να ενορχηστρώσει και να ηχογραφήσει μέρος των μελοποιήσεών της με την Ορχήστρα σύγχρονης μουσικής της ΕΡΤ. Επίσης, κυκλοφόρησε ανεξάρτητα ένα τραγούδι ειδικά αφιερωμένο στη «Δήμητρα της Λέσβου», η Κυρά της Συγγνώμης, το 2021.'
    },
    {
      id: 2,
      name: 'Alexis Bove',
      website: 'https://alexibove.wixsite.com/my-site',
      description: 'Γεννημένος στο Παρίσι, ο Alexis Bove είναι ένας πολυσχιδής τσελίστας με έντονη εμπειρία στην ευρωπαϊκή μουσική σκηνή. Είναι ενεργός ερμηνευτής μουσικής δωματίου, που μοιράζεται τη σκηνή με τους σολίστ της Φιλαρμονικής του Ρότερνταμ όπως οι Cecilia Ziano, Julien Hervé, Juliette Hurel, Hed Yaron Meyerson, Roman Spitzer και άλλοι. Είναι επίσης μέλος του "Ensemble Mir" από το 2014, παίζοντας ρεπερτόριο από ρομαντική έως σύγχρονη μουσική με διάφορες ρυθμίσεις οργάνων. Από το 2020 ο Alexis παίζει τακτικά με το Metropole Orkest, την κορυφαία ορχήστρα ποπ και τζαζ στον κόσμο, υπό τη διεύθυνση των Jules Buckley και Vince Mendoza.'
    },
    {
      id: 3,
      name: 'Χρήστος Γαρμπιδάκης',
      website: 'https://www.fraternalairpro.com/',
      description: 'Από παιδί ξεκινάει σπουδές κλασικής κιθάρας, σύντομα, ωστόσο, επικεντρώνεται στις progressive rock, new wave και ambient σκηνές. Οι επιρροές είναι πολλές, με πιο καθοριστικές αυτές των Genesis, This Mortal Coil, David Bowie, Brian Eno, Ryouichi Sakamoto, Μάνου Χατζιδάκι, Μίκη Θεοδωράκη, Max Richter και Arvo Part. Συνέθεσε, παρήγαγε, κυκλοφόρησε και παρουσίασε ζωντανά πρωτότυπη μουσική για βουβές ταινίες και παραστάσεις σύγχρονου χορού, καθώς και αρκετά studio albums και συνεχίζει. Είναι μέλος των μουσικών σχημάτων diamat και lyric of leaves. Τον Απρίλιο του 2022 ίδρυσε την ατομική επιχείρηση FAir | Fraternal Air Productions.'
    },
    {
      id: 1,
      name: 'Σταύρος Λάντσιας',
      website: 'http://www.stavroslantsias.gr',
      description: 'O Σταύρος Λάντσιας γεννήθηκε στην Κύπρο. Σπούδασε κλασικό πιάνο και θεωρία μουσικής στο Eλληνικό Ωδείο Λευκωσίας. Έχει συνεργαστεί με σημαντικούς μουσικούς όπως η Έλλη Πασπαλλά, ο Aλκίνοος Iωαννίδης, ο Ορφέας Περίδης, η Ελένη Καραΐνδρου, ο Νίκος Ξυδάκης, η Xάρις Aλεξίου, ο Κώστας Τουρνάς, ο Χρήστος Θηβαίος, o David Lynch, o Διονύσης Σαββόπουλος και άλλοι... H πρώτη του προσωπική δισκογραφική δουλειά έχει τον τίτλο Επιστροφή (1999) στην οποία, σε δύο συνθέσεις, φιλοξενείται ο διακεκριμένος μουσικός Haig Yazdjian. Τον Απρίλιο του 2002 κυκλοφορεί τη δεύτερη προσωπική του δουλειά με τίτλο Το Ταξίδι μιας Νότας. Τον Δεκέμβριο του 2012 δημιουργεί το «Stavros Lantsias trio» με τους διακεκριμένους σολίστες Ανδρέα Πολυζωγόπουλο και Γιώργο Καλούδη.'
    },
    {
      id: 1,
      name: 'Νίκος Σωτηρόπουλος',
      website: '',
      description: 'Ο Νίκος Σωτηρόπουλος είναι συνθέτης, ενορχηστρωτής και μουσικός παραγωγός. Καθηγητής, επίσης, μουσικής στη δευτεροβάθμια εκπαίδευση, μέχρι πρόσφατα, για 35 και πλέον χρόνια δίδαξε στα παιδιά να αγαπούν τη μουσική, να γνωρίζουν και να δημιουργούν τα δικά τους μουσικά όργανα, συνδέοντας το παρελθόν με το μέλλον μαθαίνοντας την ιστορία της μουσικής, έκανε εισαγωγή στη μουσική τεχνολογία και την ηχογράφηση σε οργανωμένο στούντιο στο σχολείο και δημιούργησε χορωδίες, συγκροτήματα και φωνητικά σύνολα.'
    },
    {
      id: 1,
      name: 'Άγγελος Θεοδωράκης-Παπαγγελίδης',
      website: 'https://music.youtube.com/channel/UCtj_ekXbMz26uQauDLTTLPg',
      description: 'Ο Άγγελος Θεοδωράκης-Παπαγγελίδης γεννήθηκε στη Αθήνα και είναι τραγουδοποιός. Έχει κάνει σπουδές πάνω στην κλασική κιθάρα. Ξεκίνησε να ηχογραφεί τη μουσική του το 2016 και το 2020 κυκλοφόρησε το πρώτο του άλμπουμ σε αγγλικούς στίχους με τίτλο Angelos Bookstore. Το 2020, συμμετείχε ως δημιουργός σε παραγωγή του Ελληνικού Σχεδίου και της Στέγης Γραμμάτων και Τεχνών όπου παρουσίασε με πενταμελές σύνολο μελοποιήσεις του πάνω σε ποίηση του Ανδρέα Κάλβου, του Διονύσιου Σολωμού και του Λόρδου Μπάιρον. Επίσης, συμμετέχει στην Λαϊκή ορχήστρα Μίκης Θεοδωράκης ερμηνεύοντας τραγούδια του παππού του Μίκη Θεοδωράκη.'
    },
    {
      id: 1,
      name: 'Σαβίνα Γιαννάτου',
      website: 'https://www.savinayannatou.com',
      description: 'Ξεκίνησε την επαγγελματική της σταδιοδρομία τραγουδώντας στην εκπομπή του Γ Προγράμματος της ΕΡΤ “Εδώ Λιλιπούπολη” σε συνεργασία με την Λ.Πλάτωνος (1978-81). Εχει συνεργαστεί με πολλούς Έλληνες συνθέτες στο χώρο του έντεχνου τραγουδιού. Από το 1994 με το συγκρότημα “Primavera en Salonico” ερμηνεύει τραγούδια από τη Μεσόγειο και τα Βαλκάνια σε φεστιβάλ σε όλο τον κόσμο και δισκογραφεί για τις εταιρείες ΛΥΡΑ και ECM. Ασχολείται με τον ελεύθερο φωνητικό αυτοσχεδιασμό στο χώρο της free jazz. Έχει συνθέσει μουσική για το Εθνικό Θέατρο, το Κ.Θ.Β.Ε., το ΔΗΠΕΘΕ Λάρισας και το Θέατρο του Νέου Κόσμου. Η δισκογραφία της περιλαμβάνει γύρω στους τριάντα δίσκους, προσωπικούς και συμμετοχές.'
    },
    {
      id: 1,
      name: 'Σπύρος Μάνεσης',
      website: 'https://spyrosmanesis.com',
      description: 'Ο Σπύρος Μάνεσης είναι πιανίστας της τζαζ από την Αθήνα. Στις σπουδές του περιλαμβάνονται πτυχία κλασικού και τζαζ πιάνου από το Ωδείο Athenaeum (με δασκάλους τους Μ. Αϊβάζοβα, Γ. Κοντραφούρη, Σ. Σύρρο), Bachelor και Master στο jazz piano από το Κονσερβατόριο του Άμστερνταμ και πτυχίο Μουσικολογίας από το ΕΚΠΑ. Έχει κυκλοφορήσει αρκετούς δίσκους και έχει περιοδεύσει σε πολλές χώρες του κόσμου. Είναι καθηγητής jazz piano στη σχολή τζαζ Jazzart και έχει διδάξει στα ωδεία Athenaeum και Μουσικής Πράξης και ως επισκέπτης καθηγητής στο Τμήμα Μουσικών Σπουδών του Ιονίου Πανεπιστημίου.'
    },
  ];

  constructor() { }

  getArtists() {
    return this.artists;
  }
}