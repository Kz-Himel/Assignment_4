1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById() নির্দিষ্ট একটি ID ব্যবহার করে একটিমাত্র element খুঁজে বের করে। getElementsByClassName() কোনো class name ব্যবহার করে একাধিক element return করে। অন্যদিকে querySelector() CSS selector দিয়ে প্রথম matching element নির্বাচন করে এবং querySelectorAll() CSS selector ব্যবহার করে সব matching element return করে।

2. How do you create and insert a new element into the DOM?
Ans: নতুন element যোগ করার জন্য প্রথমে createElement() দিয়ে element তৈরি করতে হয়। এরপর প্রয়োজন অনুযায়ী তার মধ্যে text বা attribute সেট করতে হয়। সবশেষে appendChild() বা append() ব্যবহার করে সেটিকে parent element-এর ভিতরে যুক্ত করা হয়।

3. What is Event Bubbling? And how does it work?
Ans : কোনো child element-এ event হলে সেটা ধাপে ধাপে তার parent হয়ে উপরের দিকে যায়। এটাকেই Event Bubbling বলে।

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: সব child-এ আলাদা listener না দিয়ে তাদের parent-এ একটি listener বসানোকে Event Delegation বলে। এতে code কম লাগে এবং dynamic element সহজে handle করা যায়।

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() কোনো element-এর default behavior বন্ধ করে দেয় (যেমন form submit হওয়া বন্ধ করা)। আর stopPropagation() event-কে উপরের element-এ ছড়িয়ে পড়া (bubbling) থেকে আটকায়।
