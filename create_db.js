  
var db = openDatabase("teach_db_local", "1.0", "local teachdb", 10000000);
        
        db.transaction(function (tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS classe (id INTEGER PRIMARY KEY AUTOINCREMENT, libelle TEXT)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS etude (id INTEGER PRIMARY KEY AUTOINCREMENT, enseignant INTEGER NOT NULL, classe INTEGER NOT NULL, matiere INTEGER NULL, FOREIGN KEY(enseignant) REFERENCES enseignant(id), FOREIGN KEY(classe) REFERENCES classe(id),FOREIGN KEY(matiere) REFERENCES matiere(id))'); 
        tx.executeSql('CREATE TABLE IF NOT EXISTS matiere (id INTEGER PRIMARY KEY AUTOINCREMENT, libelle TEXT, coef DECIMAL(2,2) NULL)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS cours (id INTEGER PRIMARY KEY AUTOINCREMENT,libelle TEXT, classe INTEGER NOT NULL, matiere INTEGER NOT NULL, FOREIGN KEY(classe) REFERENCES classe(id), FOREIGN KEY(matiere) REFERENCES matiere(id) )');
        tx.executeSql('CREATE TABLE IF NOT EXISTS enseignant (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, prenom TEXT, num_tel INTEGER, num_cin INTEGER, e_mail TEXT, login TEXT, password TEXT  )');
        tx.executeSql('CREATE TABLE IF NOT EXISTS etudiant (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, prenom TEXT, num_tel INTEGER, num_cin INTEGER, e_mail TEXT, classe INTEGER NOT NULL, FOREIGN KEY(classe) REFERENCES classe(id) ) ' );
        tx.executeSql('CREATE TABLE IF NOT EXISTS seance (id INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, sale TEXT, departement TEXT, cours INTEGER NOT NULL, FOREIGN KEY(cours) REFERENCES cours(id) )');
        tx.executeSql('CREATE TABLE IF NOT EXISTS absence (id INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, etudiant INTEGER NOT NULL, seance INTEGER NOT NULL,FOREIGN KEY(etudiant) REFERENCES etudiant(id), FOREIGN KEY(seance) REFERENCES seance(id) ) ');
        tx.executeSql('CREATE TABLE IF NOT EXISTS comportement (id INTEGER PRIMARY KEY AUTOINCREMENT, lebelle TEXT, date DATE, etudiant INTEGER NOT NULL, seance INTEGER NOT NULL,FOREIGN KEY(etudiant) REFERENCES etudiant(id), FOREIGN KEY(seance) REFERENCES seance(id) ) ');
        tx.executeSql('CREATE TABLE IF NOT EXISTS examen (id INTEGER PRIMARY KEY AUTOINCREMENT,type TEXT, coef DECIMAL(2,2), note DECIMAL(2,2), date DATE, etudiant INTEGER NOT NULL, matiere INTEGER NOT NULL,FOREIGN KEY(etudiant) REFERENCES etudiant(id), FOREIGN KEY(matiere) REFERENCES matiere(id) ) ');
                                     }     );
