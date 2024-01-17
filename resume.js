const { JSDOM } = require('jsdom');

// Function to set the content of resume sections
function setResumeContent() {
    // Create a virtual DOM environment
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    const document = dom.window.document;

    // Replace the placeholder content with your actual resume details
    document.getElementById('name').innerText = 'Hemilkumar Pansuriya';
    document.getElementById('contact').innerText = 'Phone: +1 7059776180\nEmail: hemilkumar2407@gmail.com\nLinkedIn: https://www.linkedin.com/in/hemil-p-13vb1998/';
    document.getElementById('summary').innerText = `As a DevOps Engineer with around 5 years of experience, I have demonstrated expertise in designing and implementing robust and scalable infrastructure solutions, streamlining development and operations processes, and ensuring seamless software delivery. I possess a deep understanding of DevOps principles, cloud technologies, automation tools, and CI/CD practices.

    Primary duties include coming up with a combination of Automation/Tools and Processes to achieve Continuous Delivery/ Continuous Integration for various applications by integrating various tools like Jenkins, Git, Jira, Nexus/Artifactory, Puppet/Chef, Maven/Gradle, various testing frameworks like Junit, Selenium, Cucumber, SoapUI, JMeter, various App servers like WebLogic, WebSphere, JBoss along with establishing process for Code Promotion within the Enterprise to move code from Dev, QA, SIT, Stage and Prod Environments.`;

    document.getElementById('experience').innerHTML = `
        <li>
            <strong>DevOps Engineer</strong> - PROCOGIA, Vancouver BC (Oct 2022 – Till date)
            <ul>
                <li>Experience in Configuring and Administering Repository Managers like Nexus, Artifactory.</li>
                <li>Led the migration of on-premises infrastructure to the cloud (AWS) using Infrastructure as Code (IaC) principles...</li>
                <!-- Add other responsibilities and achievements -->
            </ul>
        </li>
        <li>
            <strong>DevOps Engineer</strong> - KINAXIS, Ottawa, ON (Mar 2021 – Oct 2022)
            <ul>
                <li>Involved in CI/CD process and integrated GIT, Nexus, SonarQube, Maven artifacts build with Jenkins and creating Docker image...</li>
                <li>Designed and implemented a robust and scalable CI/CD pipeline using tools like Jenkins, GitLab CI/CD, or similar platforms...</li>
                <!-- Add other responsibilities and achievements -->
            </ul>
        </li>
        <li>
            <strong>DevOps Engineer/AWS Engineer</strong> - Tamilnadu Mercantile Bank, Tamilnadu, In (Apr 2019 – Feb 2021)
            <ul>
                <li>Design EC2 instance architecture to meet high availability application architecture and security parameters.</li>
                <li>Developed processes, tools, automation for Jenkins based software for build system and delivering SW Builds.</li>
                <!-- Add other responsibilities and achievements -->
            </ul>
        </li>`;

    document.getElementById('education').innerHTML = `
        <li>Bachelor of Information Technology - Parul University Vadodora, Gujarat, India.</li>`;

    document.getElementById('certification').innerHTML = `
        <li>
            <strong>AWS Certified DevOps Engineer - Professional</strong>
            <ul>
                <li>Issuing Organization: AWS</li>
            </ul>
        </li>`;
}

// Call the function to set the initial content
setResumeContent();
