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

## Problem Statement  
Before this feature, **Pluang's customer support relied heavily on third-party channels** like Telegram and email. This led to:  
- **Unstructured issue reporting**, making it difficult for agents to triage and prioritize requests.  
- **Longer response times**, as customers often provided incomplete information.  
- **No direct case tracking**, forcing users to follow up via separate channels.  

The goal was to create an **integrated, structured help request flow** that improves efficiency for both customers and support agents.   

---

## Design Goals  
✅ **Ensure structured issue reporting** through a guided **support request form**.  
✅ **Improve efficiency** by allowing agents to focus on pre-categorized requests.  
✅ **Enable direct issue tracking**, eliminating reliance on external communication.  

## Research & Feedback  
The design was informed by **internal feedback** from Pluang’s CS team, focusing on:  
- **Reducing manual follow-ups** by ensuring customers provide necessary details upfront.  
- **Ensuring clarity in ticket status** so users understand where their request stands.  
- **Minimizing resolution time** through better information gathering. 

![Image Description](/visuals/cs_3-flow.webp)
*Preview of the overall support chat flow.* 

## Key Features & Challenges  

### **1️⃣ Support Request Form as the Entry Point**  
Instead of jumping into a live chat, users **must submit a structured request form first**.  
- They **categorize their issue** (e.g., transaction-related, account access, general inquiries).  
- Some cases **require transaction selection** for accurate troubleshooting.  
- Attachments **can be added** for further clarification.  

**Challenge:** Some users expect **instant** chat support and may find form submission inconvenient.  

**Solution:** The UI emphasizes that **structured requests lead to faster resolutions**, setting proper expectations.  

![Image Description](/visuals/cs_1-bw.webp)
*Support chat form preview* 

### **2️⃣ Streamlined Chat Interface with Ticketing**  
Once the form is submitted, a **support chat ticket is created**, and users can track their request.  
- Users see their **active and past tickets** in a structured chat list.  
- If an agent is available, the conversation begins **immediately**.  
- If no agents are available, users receive **queue status updates**.  

**Challenge:** Users may not understand ticket progress or expected response times.  

**Solution:** The chat UI **displays real-time queue status**, reducing uncertainty.  

![Image Description](/visuals/cs_queues.webp)
*Ticket statuses and waiting handling*  

### **3️⃣ Managing Wait Times & Response Expectations**  
Not all requests are handled immediately, so the system includes:  
✅ **Queue status indicators** (e.g., "Waiting for Agent", "Estimated Wait Time: 5 minutes").  
✅ **Real-time connection** when agents are available.  
✅ **Notification alerts** if response times exceed estimates.  

**Challenge:** Users might drop off if wait times are too long.  

**Solution:** If an agent isn't available soon, the system provides **alternative support options** (e.g., FAQ links, email follow-ups).  

![Image Description](/visuals/cs_4.webp)
*Cases of responses*   

### **4️⃣ Post-Chat Rating & Feedback System**  
Once the chat ends, users are asked to rate their experience.  
- **Design 1:** Simple emoji-based rating.  
- **Design 2:** Rating with a **text feedback field** for additional insights.  

**Challenge:** Not all users provide feedback, limiting improvement opportunities.  

**Solution:** Users who **rate poorly (1-3 stars) must provide additional context**, helping Pluang identify pain points.  

![Image Description](/visuals/cs_5.webp) 
*Rating system after a support ticket closes* 

---

## Impact & Outcomes  
✅ **Reduced support backlog**—agents handle **fewer redundant messages**, focusing on **pre-categorized** issues.  
✅ **Faster resolutions**—structured forms ensure that **all necessary details** are provided upfront.  
✅ **Improved user experience**—users now have **direct case tracking** instead of following up via email.  

## Lessons & Future Improvements  
🔹 **Enhance ticket visibility**—a clearer **ticket status indicator** (e.g., "In Progress", "Resolved") could improve user experience.  
🔹 **Expand attachment support**—allow users to upload more **file types** for better issue clarification.  
🔹 **Improve response time estimation**—dynamic **wait time adjustments** based on agent availability.

---

## Final Thoughts  
The **Pluang CS Help Feature** effectively streamlined customer support, shifting from an **unstructured** chat model to a **ticket-based** system. By **forcing structured input**, it ensures that users provide the **right information upfront**, leading to **faster resolutions and improved efficiency** for both customers and support teams.  

