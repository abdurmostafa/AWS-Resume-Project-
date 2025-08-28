document.addEventListener('DOMContentLoaded', function() {
    const experienceData = [
        {
            date: 'Jan 2021 - Present',
            title: 'IT4Causes',
            description: 'I contributed to nonprofit projects focused on improving software and network security. In these efforts, I enhanced cybersecurity measures, facilitated secure file transfers, and assisted with transitions to cloud systems. Additionally, I supported end-user training and worked on optimizing IT systems for better efficiency.'
        },
        {
            date: 'Jun 2019 - Aug 2020',
            title: 'Skechers Manager',
            description: 'I managed sales operations, team leadership, and supplier communication across multiple businesses. In leading the operations of three companies, I successfully increased revenue and improved customer satisfaction. I utilized market insights and ensured regulatory compliance through automated tax filing. Additionally, I led strategic resource management to enhance operational efficiency and align with business goals.'
        },
        {
            date: 'Feb 2022 - Mar 2023',
            title: 'VCU Chemistry Tutor',
            description: 'Tutored diverse student-athletes, developed study strategies, and led problem-solving sessions.'
        }
    ];

    const projectsData = [
        {
            date: 'Oct 2024',
            title: 'Cloud Resume',
            description: 'Create HTML,CSS, and JavaScript for resume/ Upload files to S3 bucket/ Configure S3 for a static website with public access/ Register a domain name with route 53/ Update records to point to the S3 website endpoint, Set up SSL/HTTPS with AWS Certificate Manager, Create a CloudFront distribution'
        },
        {
            date: 'Feb 2022 - Mar 2023',
            title: 'Security and Compliance Optimization',
            description: 'Implemented AWS security enhancements, deploying AWS Web Application Firewall and AWS Shield to safeguard against DDOS attacks.'
        },
        {
            date: 'Feb 2022 - Mar 2023',
            title: 'IP Address Management Automation',
            description: 'Automated removal of specified IP addresses from allow-list using Python. Streamlined management of approved IP addresses, showcasing practical cybersecurity skills.'
        },
        {
            date: 'Feb 2022 - Mar 2023',
            title: 'Conducting Tabletop SOC Exercises',
            description: 'I monitored OSINT to identify emerging cyber campaigns and investigated phishing campaigns along with malicious indicators of compromise (IoCs).'
        }
    ];

    const experienceTimeline = document.getElementById('experience-timeline');
    const projectsTimeline = document.getElementById('projects-timeline');

    // Function to create timeline entries
    function createTimelineEntries(data, timeline) {
        data.forEach((item, index) => {
            let entry = document.createElement('div');
            entry.classList.add('timeline-entry');
            entry.setAttribute('id', 'entry-' + index);

            let dot = document.createElement('div');
            dot.classList.add('timeline-dot');

            let date = document.createElement('div');
            date.textContent = item.date;
            date.classList.add('timeline-date');

            let content = document.createElement('div');
            content.classList.add('timeline-content');
            content.setAttribute('id', 'content-' + index);

            let title = document.createElement('h3');
            title.textContent = item.title;

            let description = document.createElement('p');
            description.textContent = item.description;
            description.style.display = 'none'; // Initially hide the description

            // Click event to toggle the description visibility
            entry.addEventListener('click', function() {
                description.style.display = description.style.display === 'none' ? 'block' : 'none';
            });

            content.appendChild(title);
            content.appendChild(description);

            entry.appendChild(dot);
            entry.appendChild(date);
            entry.appendChild(content);

            timeline.appendChild(entry);
        });
    }

    // Create entries for both timelines
    createTimelineEntries(experienceData, experienceTimeline);
    createTimelineEntries(projectsData, projectsTimeline);
});
