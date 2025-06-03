# Futurum CRUD Frontend

🚀 **Live Demo:** [https://futurum-crud-frontend.vercel.app/](https://futurum-crud-frontend.vercel.app/)

🛠️ **Futurum CRUD Frontend** is a single-page application (SPA) for managing marketing campaigns — it allows users to create, edit, and view campaigns, along with budgets and keywords.  
This project was developed as part of a recruitment task.

---

## Recruiter Notes

This project uses LocalStorage/Context API as a backend simulation. In a production environment, it can easily be extended to integrate with a REST or GraphQL API.

The project includes basic form validation, error handling, and accessibility features (e.g. aria-label, aria-live, role).

## Additional Context

I deliberately tried to apply different coding styles and approaches, as I know that different companies often have their own preferred philosophies and standards. I initially considered expanding the project with a NestJS backend, but I decided it would be overkill for this recruitment task, so I kept it focused on the frontend. For similar reasons, I skipped features like adding favicons, handling 404 pages, and SEO sitemaps — these can easily be added later if needed.

## Fund Allocation

For the fund allocation, I assumed that the total budget (across all campaigns) is distributed, and each campaign can allocate a portion of that fund to itself.

Regarding the bid — in this task it wasn’t entirely clear what this value should represent (usually in advertising contexts, a bid is the maximum amount you’re willing to pay per click or per impression). Here, I treated it as a unit bid amount for a campaign, and set the rule that the fund must be at least 10 times the bid amount to ensure some minimum spend.

The town field was not marked as required in the task description, but radius was marked as required. In my opinion, these requirements are a bit conflicting — usually, radius would make sense only if a town is specified (i.e. to define a geofence). I considered implementing logic to make radius optional if town is empty, but decided to stick with the given requirement that radius is mandatory, for the sake of clarity.

## Notes on Implementation

The codebase is intentionally written to show flexibility — different components follow different patterns to demonstrate my adaptability to different team preferences.

The form validation uses Zod for declarative validation, demonstrating the ability to integrate third-party libraries for business logic.

The use of Context API shows that I understand React’s state management capabilities, even without a dedicated backend or Redux.

The project can be easily expanded in the future to include a real backend, enhanced error handling, and more advanced features.

## 🚀 Features

✅ Campaign list view  
✅ Adding new campaigns  
✅ Editing existing campaigns  
✅ Form validation using **React Hook Form** and **Zod**  
✅ Dynamic keyword management  
✅ Local state management using **Context API** (simulating backend)  
✅ Responsive design  
✅ Basic SEO and accessibility features
✅ Dark Theme

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Chakra UI** — for styling and accessibility
- **React Router DOM** — routing
- **React Hook Form** + **Zod** — form validation
- **uuid** — unique ID generation
- **React Icons** — icon library

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MarkizPlateau/futurum-crud-frontend.git
   cd futurum-crud-frontend

   ```

2. **Install dependencies**

```
npm i
```

3. **Run the project**

```
npm run dev
```

4. **Access the app**

```
http://localhost:3000 (or your port from .env - check vite.config.ts)
```

🍾😆🤙🏻 Author
MarkizPlateau
