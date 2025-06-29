# ✅ Task Manager App

Aplikacja webowa do zarządzania zadaniami. Projekt wykonany w technologii **Angular 19 + TypeScript** z backendem opartym o **JSON Server**.

---

## 🎯 Cel projektu

Stworzenie kompletnego systemu do:

- zarządzania zadaniami (CRUD),
- autoryzacji użytkowników (JWT),
- przydzielania ról (admin / user),
- filtrowania, sortowania i oznaczania statusu zadań.

Projekt realizowany jako **aplikacja zaliczeniowa** z przedmiotu **Framework Angular** na kierunku **Informatyka**.

---

## ✨ Funkcje

### 👥 Rejestracja i logowanie

- Walidacja formularzy z `ReactiveForms`
- Przechowywanie tokenu JWT w `localStorage`
- Obsługa błędów logowania i rejestracji

### 🔐 Role i autoryzacja

- `admin`: dostęp do wszystkich zadań i użytkowników
- `user`: widzi tylko swoje zadania
- Ochrona tras przez `AuthGuard`

### ✅ Zadania

- Dodawanie nowych zadań
- Edycja i usuwanie istniejących
- Podgląd szczegółów zadania
- Oznaczanie jako "wykonane"
- Filtrowanie po statusie i użytkowniku
- Sortowanie po dacie i priorytecie

### 🧑‍💼 Panel administratora

- Przegląd wszystkich zadań
- Operacje CRUD na dowolnych zadaniach
- Widok zadań przypisanych do użytkowników

---

## 🛠️ Technologie

- **Angular 19 (Standalone Components)**
- **Angular Material** – interfejs użytkownika
- **JSON Server** – lokalny backend REST
- **RxJS** – obsługa strumieni
- **TypeScript**

---

## ⚙️ Uruchomienie aplikacji

### 1. Backend – JSON Server

```bash
cd backend
npm install -g json-server
json-server --watch db.json --port 3001
```
Uwaga: Plik db.json powinien zawierać dane przykładowe (użytkownicy, zadania)

2. Frontend – Angular
bash
Kopiuj
Edytuj
cd frontend
npm install
ng serve
Aplikacja dostępna będzie pod adresem:
http://localhost:4200

🧪 Konta testowe
bash
Kopiuj
Edytuj
ADMIN:
Email: admin@admin.com
Hasło: admin

USER:
Email: user@user.com
Hasło: user
📁 Struktura projektu
graphql
Kopiuj
Edytuj
task-manager/
│
├── backend/
│   └── db.json         # JSON Server (API + dane)
│
├── frontend/
│   ├── src/
│   │   └── app/
│   │       ├── modules/
│   │       │   ├── auth/    # logowanie, rejestracja
│   │       │   └── tasks/   # komponenty i widoki zadań
│   │       └── core/        # serwisy, guardy
│   └── angular.json
📌 Autorzy
Zaliczeniowy projekt Angular
Dominik Pazurek, Marcin Grabania
Specjalność: Frontend Development
