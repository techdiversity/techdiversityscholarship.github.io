import Vue from "vue";

var example2 = new Vue({
    el: '#section1',
    data: {
        students: [
            // Add additional students here and assign them to the first or second slide if featured
            {
                name: "leroy",
                fullName: "LeRoy Gardner",
                link: "#students/leroy",
                description: "As an Officer in the Navy Reserve in Afghanistan, LeRoy spent his free time trying to learn to code.",
                image: "images/students/leroy.png",
                title: "Web Developer",
                slide: 1,
                bios: [
                    "Throughout his 10-month deployment, LeRoy’s main job was to advise the General of the Afghan National Police on recruiting, retention, training and strategy. During the handful of hours when he wasn’t donning body armor, magazines, weapons and a helmet, LeRoy was glued to his Macbook, trying to teach himself to code using online tutorials.",
                    "He’d been interested in coding for years and had learned some of the basics, but soon became frustrated. “I didn’t give in, but I realized the process needed to change,” he said. Sitting in front of his computer in Kabul one night, LeRoy got stuck with a Ruby problem and reached out to Jesse Wolgamott, Back End engineering instructor at The Iron Yard’s Houston campus, for help.",
                    "At the time, LeRoy had no intention of applying to The Iron Yard – he just needed advice and sought help from a fellow Houston-ite. Jesse answered that day with an explanation of how to fix the error. Though he was appreciative of Jesse’s response, the tone of the email caught LeRoy’s attention. “That email was a harbinger of things to come. I just knew that I had to commit to learning full-time, with something to lose to make it meaningfulTutorials simply felt a bit like a dalliance,” he explained LeRoy talked to his wife, applied for The Iron Yard’s Back End Engineering with Ruby on Rails course, and was accepted.",
                    "He began class soon after returning home from Kabul in January 2015. “Learning [at The Iron Yard] doesn’t happen in a vacuum. These dudes don’t know it, but they’ve helped me a bunch along the way — there were times when I thought I wouldn’t solve an issue. StackOverflow, Google and all the interwebs hadn’t helped. But my buddies did. Overall this experience has been what I needed to get where I wanted. Period. I am getting to where I wanted to be. I am getting to where I saw myself. What is that worth to me? Much.”",
                    "After graduation, LeRoy immediately jumped into an apprenticeship with Stackwave in Houston, where he is now focused on training in Front End Engineering. He’s still in touch with his cohort peers, who lean on each other when they need support as they launch into new careers. LeRoy described the camaraderie eloquently: “we all were seeking to create something, make something real and see it exist in the world. I think the skills and tools are simply a means to solve problems and create.”",
                    "LeRoy says he is passionate about working with customers to see a vision come to life. He loves solving problems through web applications, making brands stronger with solid design, and watching clients get excited about his work. “The skills I’ve learned and continue to develop have helped change the trajectory of options I have available,” he said."
                ]
            },
            {
                name: "astrid",
                fullName: "Astrid Countee",
                link: "#students/astrid",
                description: "Astrid was a data analyst working in oil and gas and decided to pursue her passion for building software.",
                image: "images/students/astrid.png",
                title: "Mobile Developer",
                slide: 1,
                bios: [
                    "I feel so privileged to be at this place in my life. I feel so blessed to have had this experience. In a way, being able to be employed as a software developer is the least important aspect of this journey. The best part has been the person that I have become in the process. I believe in myself more, and I participate in life more, and I can see so much opportunity that before was invisible to me. I feel like I am crafting my kind of life, where I can do the things that I love, and make a living doing it. I plan to do that by getting more women like me involved, and helping to teach more people to code. How many ways can you say your grateful? I feel like I may never stop.",
                    "In many ways I hate to see this part of my life end, but I am so looking forward to where I go from here. I have a feeling that instead of an ending, I am experiencing and expansion, and that somehow all of this will just keep growing and changing. I hope that we all stay connected along the way, cause I already miss these guys so much."
                ]
            },
            {
                name: "andrew",
                fullName: "Andrew El-Masry",
                link: "#students/andrew",
                description: "Andrew switched majors several times in college before finding his stride in programming.",
                image: "images/students/andrew.png",
                title: "Mobile Developer",
                slide: 2,
                bios: [
                    "I was born in America, and my parents are Egyptian with a Middle Eastern mentality. For them, life is defined by three professions: doctor, lawyer or engineer. If you weren’t one of those, you were just average. So I tried to follow in my brother Peter’s footsteps and went into pre-med. Eventually, I came home to my mom and said, “mom, I can’t do this. It’s not me.”",
                    "I have always loved that idea that technology is there for the good of mankind. It really helps us and makes our lives easier when we don’t even know it. I fell in love with that idea of the human telling the computer what to do. I switched to Computer Science and I just loved it. I was in my Java II class (at Kennesaw State University) and somebody next to me was talking about a coding program called The Iron Yard. He was telling me all these things that I just did not believe, like they train you for three months, and at the end they give you the skills and experience to get a job. I was intrigued! So, I looked into it, talked to my mom and decided to give it a try.",
                    "At that point, I had switched majors a few times and I wanted to take a break. I took a semester off to try The Iron Yard. I could tell in the first interview with The Iron Yard that they really are interested in each individual and in his/her capabilities. Tim Whitacre [Front-End Instructor] was just a real man and I respect him very much. Once I started class, everybody was just so kind and willing to help each other. It was that type of environment where we all wanted to work together and not compete at all.",
                    "After week two, the class really picked up and became more difficult. But even in those moments, I could rely on the people around me and my instructor helped me every step of the way. It was more about learning to solving a problem, not focusing on the problem. That practice of solving problems can be applied to so many concepts in life, not just in coding.",
                    "I always knew I wanted to deal with Java, because my first phone was a G1 and I fell in love with that offering. When I was in school, I fiddled around with small Android applications here and there in my Java II class. What The Iron Yard gave me was the gift and the capability to learn concepts of a language and to better understand the functions of each language.",
                    "After graduation, I went back to Java after learning JavaScript with a whole new mindset. I was able to pick up concepts just like that. Being able to do it yourself, live it and apply it. That is what The Iron Yard gave me.",
                    "Someone from the department of Biomedical Informatics at Emory who had attended our Demo Day presentation contacted me a couple of weeks afterward and asked if I would be willing to come in for an interview for a mobile engineering position. Even though I was still junior level in Java, he gave me a chance.",
                    "Now, I am honestly working at the best job of my life, with the best cause in the world. My job is to develop mobile health applications for people in remote villages that don’t have access to health care in areas of Guatemala and other isolated areas in third world countries.",
                    "The specific application that I am working on right now is an Android application that hooks up to ultrasound devices. It helps midwives who are taking care of pregnant women. Most of them are unable to read, so I had to tailor this application for them. It is very vocal and visual, with audible instructions.",
                    "It’s really ironic that I was pre-med and I still somehow ended up in the medical field, not as a doctor but as a developer. Now, I’m finishing my bachelor’s degree online, and at the same time doing a job I love."
                ]
            },
            {
                name: "bernard",
                fullName: "Bernard Worthy",
                link: "#students/bernard",
                description: "Bernard was on a leadership track with a major retailer when he decided to learn to code.",
                image: "images/students/bernard.png",
                title: "Web Developer",
                slide: 2,
                bios: [
                    "After graduating college with a business degree, Bernard was on the management fast-track with a major retailer for three years before he realized his desire for more was not going to disappear. He had a good job and a wonderful fiancée, but he couldn’t stop thinking about his interest in entrepreneurship and whether there was something more for him and his family.",
                    "Bernard moved to Durham, N.C. to help with a church plant and immerse himself in the startup scene. He took a few months off of work and dedicated himself to meeting people within the industry, talking to entrepreneurs and testing whether the life of an entrepreneur was for him.",
                    "He came up with ideas and worked through every area of entrepreneurship, from understanding VC to working with attorneys, understanding formations, etc. He soon realized that if he was to be successful, he needed to be right in the “nitty gritty” of development. “Why don’t I just learn how to do it?” he thought.",
                    "He started working through some coding tutorials and doing a bit of freelance graphic design work on the side. He even decided to build an app. “You can do tutorials until you are blue in the face, but until you go through whole cycle of building software, you don’t really understand how it all works together,” he said. He wanted to find out whether he really wanted to do this work daily.",
                    "It was just a lot of fun, to kind of have the idea, work the business model and plan, and then actually start to tackle development myself.",
                    "During those few months, Bernard and his wife considered whether a full-time code school was the logical next step. They thought about moving to a larger city, but landed on staying in Durham to attend The Iron Yard. “Because The Iron Yard was one of the leaders in the space, I had no reason to go to California, or New York, or DC to get the same experience,” he said.",
                    "I really understood the power of what a network can do for you, and I think that going to the school where you want to live is not just as important, but the biggest thing that you should be deciding, I think right up there with the instructor. The instructor is probably most important, but then you go into a school where you most want to have your career.",
                    "Within three weeks of starting his cohort, Bernard knew it was the right choice for him. “I knew this would the kind of the school that would get me into this network that I have been trying to dive into.”",
                    "Coming into the course, Bernard’s main concern was that he wanted it to be rigorous enough. Since he had some experience, he was looking for a real challenge. “I wanted to be able to really work with a development company immediately. That was my biggest concern: How rigorous the curriculum would be and the pace of the class.” He had many conversations with his instructor Chris before class began about how he could adjust the curriculum to meet his individual needs. “Chris provided me with opportunities and modified some assignments so that those of us who were more accelerated had that challenge,” he said.",
                    "One of the companies Bernard first connected with when he moved to Durham was a well-known development consultancy called CrossComm. Bernard had pitched them a startup idea and they struck up a relationship, often bumping into one another at American Underground while Bernard was freelancing. When he told a few of them that he was joining The Iron Yard, they told him to keep in touch about opportunities for a development job. After he graduated, Bernard officially joined the CrossComm team. “It has been awesome so far. On my very first day, I was working on an app for Forbes. We are building their “Thirty Under Thirty” app this year, which is really, really cool,” he said.",
                    "The very first day I was doing something I did not learn at The Iron Yard, but because of The Iron Yard I felt comfortable enough to tackle it. It was a cool thing, because I came into The Iron Yard with a lot of other skills, so then it really equipped me with the programming acumen to be able to tackle the kind of jobs that I wanted to be in.",
                    "Bernard is continuing to work on his entrepreneurial ventures on the side. He plans to launch Hackstarter, a crowdfunding site for students to raise money for coding bootcamps, in January 2016. “As a software developer, you fail everyday, hundreds of times. Especially when you are learning, and that was really hard for me. The cool part is, you see growth pretty quickly in software development. You are learning new stuff all the time, and once you kind of understand the core concepts, you can pick up new things pretty quickly.”"
                ]
            },
            {
                name: "michelle",
                fullName: "Michelle Child",
                link: "#students/michelle",
                description: "Michelle went from teaching in a foreign country to following her passion for design.",
                image: "images/students/michelle.png",
                title: "Web Developer",
                slide: 2,
                bios: [
                     "Before attending The Iron Yard, I worked as an English Assistant in a small French town near Dijon. When I came home, I had no idea what to do next. A friend suggested I look into The Iron Yard.",
                     "After reviewing their site, I instantly clicked with the design material and self-motivated, fast-paced environment they presented. I was enthralled with the idea of learning a new skill and making a career in interface design.",
                     "Throughout the class I was constantly challenged, inspired, and confident I was on the forefront of design/code education, learning from extremely talented people. It's such an exciting time to enter the industry!",
                     "Within a month of finishing the course I was offered a job by a company familiar with the quality education of The Iron Yard. I'm teaching myself new, marketable skills every day, and couldn't be more excited to spend my career as a designer."
                ]
            },
            {
                name: "wonman",
                fullName: "Wonman Lee",
                link: "#students/wonman",
                description: "Wonman used to work for a Senator on Capitol Hill. He now works as a back-end developer.",
                image: "images/students/wonman.png",
                title: "Mobile Developer",
                slide: 2,
                bios: [
                     "Before The Iron Yard, I was a systems administrator on the Hill. Random fun fact: My coworkers used to refer to me as Nick Burns on SNL. I spent 2014 knocking on doors in Alaska working on Senator Mark Begich’s re-election.",
                     "With the Senator’s loss in the November election, I found myself without a job.",
                     "President Obama and Su Kim, the Campus Director. Both deserve credit. President Obama has given countless speeches expounding on the need for more American workers skilled in STEM fields. Moving into the software field was always a goal of mine but I wasn’t able to learn efficiently while studying on my own.",
                     "A bootcamp however fit my learning style and my current status of being unemployed perfectly.",
                     "I feel like I am now equipped with the proper tools to create things. They may be rudimentary currently but with practice I feel like I can hone them to create professional and valuable apps that can create change.",
                     "One of the great strengths of software is its ability to scale everything and I’m hoping to take advantage of that in the future."
                ]
            }
        ]
    },

    methods: {
        stopSmoothScroll: function() {
            // $('html,body').animate( { scrollTop:$("#section1").offset().top } , 250);
            $.fn.fullpage.setScrollingSpeed(0);
            setTimeout(function() {
                $.fn.fullpage.setScrollingSpeed(1500);
            }, 1000);
            setTimeout(function() {
                $('html,body').animate( { scrollTop:$("#section1").offset().top } , 250);
            }, 250);
        }
    }
});
