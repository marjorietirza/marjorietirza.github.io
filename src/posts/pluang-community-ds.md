---
layout: layouts/post.njk
title: Being the 'Police' in the Community Chats
client: Pluang
year: 2022
thumbnail: "/visuals/chat_db.webp"
role: Product Designer
status: show
tags:
  - Mobile App
  - Web Dashboard
  - Operations
tools:
  - a
  - b
  - c
result:
  - ......
summary:
  - In response to analytics highlighting issues with transaction duplicates and complaints, as a Product Designer, I embarked on a transformative project aimed at improving information clarity. A rapid product launch within two months, marked by shortened transaction times and a notable reduction in complaints. This project not only optimized operations but also fostered cross-functional collaboration among product managers, operational teams, and customer service representatives, cementing relationships beyond traditional product roles.
---

## Overview  
Pluang's community chats were previously managed on **Telegram**, making it difficult to moderate discussions, enforce guidelines, and manage users effectively. To address these challenges, we designed an **internal dashboard** that allows Pluang's admins and product managers to **moderate messages, manage community members, and ensure discussions remain safe, informative, and aligned with community guidelines**.  

---

## Who I Designed This For  
This dashboard was specifically designed for:  
- **Pluang’s internal admins and product managers** who act as community moderators and need structured tools for chat management,require better tracking and reporting of community violations.  
- **Community members** who benefit from improved moderation, ensuring discussions remain **safe, relevant, and free of spam or violations**.  

![User Target](/visuals/chatdb.webp)
*Target segment of this project*

---

## Problem Statement  
Before this dashboard, Pluang’s **community chats lacked proper management tools**, leading to inefficiencies:  
- **No in-house moderation**—admins had to manually scroll through Telegram chats.  
- **No structured way to manage users or messages**, making it difficult to track violations.  
- **No centralized tool**—everything was handled through external platforms without integration.  

The goal was to **bring all moderation tasks into one dashboard**, streamlining the process for internal admins and product managers acting as community moderators.   

---

## Design Goals  
The dashboard was built to:  
- ✅ **Provide structured community management**—allowing admins to moderate messages, manage members, and enforce guidelines efficiently.  
- ✅ **Ensure safe and informative discussions** by integrating **moderation tools** and **username reservations**.  
- ✅ **Reduce reliance on third-party platforms** (like Telegram) and bring chat management **in-house** for better control.  

---

## Research & Feedback Loop  

### When I Did Research & The Result  
The research for this project was conducted in two phases:  
1. **Internal stakeholder interviews** – We gathered pain points from **admins and product managers** who manually moderated Telegram chats.  
2. **Iterative feedback** – Instead of conducting large-scale external research, this project relied on **real-world usage feedback** from internal teams.  

**Key Research Findings:**  
- **Admins needed better message filtering** – Manually searching through chat logs was inefficient.  
- **User management was challenging** – There was no easy way to track rule violators.  
- **Moderators wanted automation** – Certain flagged content should be automatically surfaced.  

This research directly informed the design of the **dashboard’s core features**.  

---

## How the Research Result Impacts Design Decisions  

Based on the research findings, several design choices were made:  
1. **Message filtering & flagging** – Instead of forcing moderators to scroll through entire chat histories, the dashboard allows **real-time filtering and flagging** of messages.  
2. **Centralized user management** – A dedicated **User Management Panel** lets admins track violations, apply penalties, and manage member roles.  
3. **Username reservation system** – Since username conflicts were common, a **reservation system** was introduced to prevent duplicates and ensure verified users received priority.  

These decisions made **moderation tasks faster, more structured, and easier to scale**.  

---

## Iterations & Process  

The design evolved through several **iteration rounds**, incorporating real-time feedback from Pluang’s internal teams:  

1️⃣ **Initial Concept & Wireframes**  
   - **Problem:** How do we bring all community moderation into one place?  
   - **Solution:** Wireframed a **basic dashboard** that included separate tabs for **messages, users, and reports**.  
   - **Feedback:** Stakeholders wanted a **simpler UI**, as the initial design felt too technical.  

2️⃣ **Prototype & Usability Testing**  
   - **Tested** the prototype with **Pluang’s product managers and admins**.  
   - Adjusted **button placements and navigation** based on moderator workflow feedback.  
   - **Simplified filters** for better usability.  

3️⃣ **High-Fidelity Design & Iterations**  
   - Incorporated **structured hierarchy** for message review.  
   - Implemented **username reservation tracking** based on admin requests.  
   - Finalized **real-time moderation features**.  

4️⃣ **Final Adjustments & Release**  
   - Optimized UI for **faster interactions**.  
   - **Ensured full integration** with Pluang’s backend for smooth data retrieval.  

---

## Key Challenges & Design Solutions  

### **1️⃣ Managing Complex Information in One Dashboard**  
Handling **messages, users, and reports in one interface** was a challenge. To simplify this:  
- The UI was **segmented into clear sections** for message moderation, member management, and username reservations.  
- A structured **hierarchy of controls** helped admins **quickly navigate between tasks**.  

![Dashboard Preview](/visuals/db_ov_1.webp)  
![Dashboard Preview](/visuals/db_ov_2.webp)  
*Preview of the Dashboard*

---

### **2️⃣ Introducing Username Reservations**  
A unique feature was **username reservations**, which was **uncommon in typical moderation dashboards**.  
- Admins could **reserve usernames linked to emails/phone numbers** for verified members.  
- A system was built to **prevent offensive usernames or duplicates**.  

![Username Reservation Mechanism](/visuals/reserve_preview.webp)  
*Preview of Username Reservation*

---

### **3️⃣ Transitioning from Telegram to an In-House System**  
Previously, moderation required **scrolling through Telegram messages manually**. The dashboard improved this by:  
- ✅ Allowing **real-time message filtering & flagging**.  
- ✅ Centralizing all moderation actions in **one interface** instead of navigating multiple chat threads.  

![Message Management](/visuals/msg_mgmt.webp)
*Preview of Message Management*  

---

## Impact & Results  

While there were **no measurable KPIs** post-launch, the new dashboard significantly improved workflow efficiency:  
- ✅ **All moderation tools are now in one place**—no need to manually browse chat logs.  
- ✅ **Violations are trackable and manageable**—admins can now respond through the dashboard.  
- ✅ **Faster response time to community issues**, as reports and flagged content are clearly surfaced.  

---

## Lessons Learned & Future Improvements  
🔹 **Testing with actual admins & moderators** – If given more time, gathering **real-world feedback** would help refine usability.  
🔹 **Potential automation features** – Such as **auto-flagging** for certain violations to reduce manual work.  
🔹 **Enhanced analytics** – Tracking common violations and user behaviors over time.  

---

## Final Thoughts  
This project successfully **brought Pluang’s community moderation in-house**, eliminating the inefficiencies of external chat management. While basic moderation tools were the foundation, features like **username reservations and structured reporting** made this dashboard a valuable **long-term solution for scaling Pluang’s community engagement**.
  
