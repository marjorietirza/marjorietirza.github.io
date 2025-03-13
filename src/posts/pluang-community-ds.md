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

## Research & Feedback Loop  
Unlike some projects that rely on user interviews or competitive analysis, this dashboard was built based on **internal feedback** from Pluang’s team.  
- **Admins and product managers** shared pain points from manually handling Telegram chats.  
- **Iterations were driven by real-world internal needs** rather than external benchmarking.  

## Key Challenges & Design Solutions  

### 1️⃣ Managing Complex Information in One Dashboard  
Handling **messages, users, and reports in one interface** was a challenge. To simplify this:  
- The UI was **segmented into clear sections** for message moderation, member management, and username reservations.  
- A structured **hierarchy of controls** helped admins **quickly navigate between tasks**.  

![Image Description](/visuals/db_ov_1.webp) 
![Image Description](/visuals/db_ov_2.webp) 
*Preview of the Dashboard* 

### 2️⃣ Introducing Username Reservations  
A unique feature was **username reservations**, which was **uncommon in typical moderation dashboards**.  
- Admins could **reserve usernames linked to emails/phone numbers** for verified members.  
- A system was built to **prevent offensive usernames or duplicates**.  

![Image Description](/visuals/reserve_preview.webp) 
*Preview of Username Reservation Mechanism* 

### 3️⃣ Transitioning from Telegram to an In-House System  
Previously, moderation required **scrolling through Telegram messages manually**. The dashboard improved this by:  
- ✅ Allowing **real-time message filtering & flagging**.  
- ✅ Centralizing all moderation actions in **one interface** instead of navigating multiple chat threads.  

![Image Description](/visuals/msg_mgmt.webp) 
*Preview of Message Management*  

---

## Impact & Results  
While there were **no measurable KPIs** post-launch, the new dashboard significantly improved workflow efficiency:  
- ✅ **All moderation tools are now in one place**—no need to manually browse chat logs.  
- ✅ **Violations are trackable and manageable**—admins can now respond through the dashboard.  
- ✅ **Faster response time to community issues**, as reports and flagged content are clearly surfaced.  

## Lessons Learned & Future Improvements  
- 🔹 **Testing with actual admins & moderators**—if given more time, gathering **real-world feedback** would help refine usability.  
- 🔹 **Potential automation features**—such as **auto-flagging** for certain violations to reduce manual work.  
- 🔹 **Enhanced analytics**—tracking common violations and user behaviors over time.  

---

## Final Thoughts  
This project successfully **brought Pluang’s community moderation in-house**, eliminating the inefficiencies of external chat management. While basic moderation tools were the foundation, features like **username reservations and structured reporting** made this dashboard a valuable **long-term solution for scaling Pluang’s community engagement**.  
