---
layout: layouts/post.njk
title: Connecting Users to Customer Service
client: Pluang
year: 2022
thumbnail: "/visuals/chat_cs.webp"
role: Product Designer
status: show
tags:
  - Mobile App
  - Chats
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
The **Pluang CS Help Feature** was designed to streamline customer support within the app. Instead of an **AI bot-driven** interaction, the system starts with a **support request form**, ensuring that customers provide structured details before engaging with a support agent. This helps **reduce unnecessary back-and-forth**, improves **issue categorization**, and optimizes **response times**.

---

## Who I Designed This For  
The design was primarily tailored for:
- **Pluang’s end-users:** Customers seeking faster and more structured support, ensuring that they can easily report issues and track their support tickets.
- **Customer Support (CS) teams:** By shifting from unstructured communication channels (e.g., Telegram and email) to a guided form-based approach, agents receive detailed and categorized information to prioritize and resolve issues more effectively.
- **Stakeholders and product managers:** To achieve an integrated system that minimizes redundant back-and-forth and improves operational efficiency while providing clear metrics for support performance.

![Who I designed for](/visuals/CS-0.webp)

---

## Problem Statement  
Before this feature, **Pluang's customer support relied heavily on third-party channels** like Telegram and email. This led to:  
- **Unstructured issue reporting**, making it difficult for agents to triage and prioritize requests.  
- **Longer response times**, as customers often provided incomplete information.  
- **No direct case tracking**, forcing users to follow up via separate channels.  

The goal was to create an **integrated, structured help request flow** that improves efficiency for both customers and support agents.

---

## Research & Feedback

### When I Did Research & The Result  
Research was conducted over a period of **two months** in the lead-up to this design update. The process included:
- **Interviews and surveys** with the CS team to identify common pain points.
- **Usability testing** with a group of active Pluang users to observe real-time challenges in current support channels.
- **Data analysis** from existing support interactions to understand ticket resolution times and the nature of issues reported.

**Results:**  
- A clear need for a **pre-structured support request form** that collects all necessary information at the outset.
- Identification of specific categories (e.g., transaction-related issues, account access) that required dedicated handling.
- Insights that structured data could significantly **reduce follow-up interactions** and improve the overall speed of resolution.

![Preview of the overall support chat flow](/visuals/cs_3-flow.webp)

---

## How the Research Result Impacts Design Decision  
The findings directly influenced several key design decisions:
- **Structured Request Form:** The emphasis on pre-categorized information ensures that all critical details are collected at the start. This minimizes follow-ups and helps agents resolve issues faster.
- **Queue and Status Indicators:** Research highlighted confusion about ticket progress. As a result, real-time indicators (e.g., "Waiting for Agent" and estimated wait times) were integrated to enhance transparency.
- **Feedback Loop Integration:** Given that not all users were providing feedback, the design was adjusted so that low ratings (1-3 stars) require additional context, ensuring actionable insights for continuous improvement.
- **User Education:** The design explicitly communicates that a structured request leads to faster resolutions, setting proper expectations from the very beginning.

---

## Design Goals  
✅ **Ensure structured issue reporting** through a guided **support request form**.  
✅ **Improve efficiency** by allowing agents to focus on pre-categorized requests.  
✅ **Enable direct issue tracking**, eliminating reliance on external communication.

---

## Iterations & Process  
The design evolved through multiple iterations, each driven by continuous user feedback and internal testing:

1. **Initial Concept:**  
   - Focused on replacing unstructured chat with a form-based approach.
   - Created low-fidelity prototypes to test the idea with the CS team.

2. **Feedback Integration:**  
   - Iterated on the prototype after conducting usability tests and gathering user feedback.
   - Adjusted the flow to ensure clarity in ticket status and reduce information gaps.

3. **High-Fidelity Prototyping:**  
   - Developed detailed mockups with clear visual cues to guide users.
   - Incorporated features like transaction selection, attachment support, and real-time status updates.

4. **Final Implementation:**  
   - Rolled out the feature with a focus on minimal friction and high information quality.
   - Continued monitoring of performance metrics and user feedback for ongoing refinements.

---

## Key Features & Challenges  

### **1️⃣ Support Request Form as the Entry Point**  
Instead of jumping into a live chat, users **must submit a structured request form first**.  
- They **categorize their issue** (e.g., transaction-related, account access, general inquiries).  
- Some cases **require transaction selection** for accurate troubleshooting.  
- Attachments **can be added** for further clarification.

**Challenge:** Some users expect **instant** chat support and may find form submission inconvenient.  
**Solution:** The UI emphasizes that **structured requests lead to faster resolutions**, setting proper expectations.

![Support chat form preview](/visuals/cs_1-bw.webp)

---

### **2️⃣ Streamlined Chat Interface with Ticketing**  
Once the form is submitted, a **support chat ticket is created**, and users can track their request.  
- Users see their **active and past tickets** in a structured chat list.  
- If an agent is available, the conversation begins **immediately**.  
- If no agents are available, users receive **queue status updates**.

**Challenge:** Users may not understand ticket progress or expected response times.  
**Solution:** The chat UI **displays real-time queue status**, reducing uncertainty.

![Ticket statuses and waiting handling](/visuals/cs_queues.webp)

---

### **3️⃣ Managing Wait Times & Response Expectations**  
Not all requests are handled immediately, so the system includes:
- **Queue status indicators** (e.g., "Waiting for Agent", "Estimated Wait Time: 5 minutes").
- **Real-time connection** when agents are available.
- **Notification alerts** if response times exceed estimates.

**Challenge:** Users might drop off if wait times are too long.  
**Solution:** If an agent isn't available soon, the system provides **alternative support options** (e.g., FAQ links, email follow-ups).

![Cases of responses](/visuals/cs_4.webp)

---

### **4️⃣ Post-Chat Rating & Feedback System**  
Once the chat ends, users are asked to rate their experience.
- **Design 1:** Simple emoji-based rating.
- **Design 2:** Rating with a **text feedback field** for additional insights.

**Challenge:** Not all users provide feedback, limiting improvement opportunities.  
**Solution:** Users who **rate poorly (1-3 stars) must provide additional context**, helping Pluang identify pain points.

![Rating system after a support ticket closes](/visuals/cs_5.webp)

---

## Impact & Outcomes  
✅ **Reduced support backlog**—agents handle **fewer redundant messages**, focusing on **pre-categorized** issues.  
✅ **Faster resolutions**—structured forms ensure that **all necessary details** are provided upfront.  
✅ **Improved user experience**—users now have **direct case tracking** instead of following up via email.

---

## Lessons & Future Improvements  
🔹 **Enhance ticket visibility**—a clearer **ticket status indicator** (e.g., "In Progress", "Resolved") could improve user experience.  
🔹 **Expand attachment support**—allow users to upload more **file types** for better issue clarification.  
🔹 **Improve response time estimation**—dynamic **wait time adjustments** based on agent availability.

---

## Final Thoughts  
The **Pluang CS Help Feature** effectively streamlined customer support, shifting from an **unstructured** chat model to a **ticket-based** system. By **forcing structured input**, it ensures that users provide the **right information upfront**, leading to **faster resolutions and improved efficiency** for both customers and support teams.

