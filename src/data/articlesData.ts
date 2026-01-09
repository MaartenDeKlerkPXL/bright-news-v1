export interface Article {
    id: number;
    title: string;
    category:
        | "Technology"
        | "Green World"
        | "Health"
        | "Education"
        | "Community";
    region: "Europe" | "Asia" | "Africa" | "Americas" | "Oceania";
    image: string;
    summary: string;
    content: string;
    date: string;
}

export const articles: Article[] = [
    {
        id: 1,
        title:
            "Revolutionary AI System Helps Restore Coral Reefs Worldwide",
        category: "Technology",
        region: "Oceania",
        image:
            "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjI4NTgwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        summary:
            "Scientists have developed an AI-powered monitoring system that has successfully restored over 10,000 square meters of coral reef ecosystems.",
        content:
            "Scientists have developed an AI-powered monitoring system that has successfully restored over 10,000 square meters of coral reef ecosystems. This groundbreaking technology uses machine learning algorithms to identify optimal conditions for coral growth and predict potential threats to reef health.\n\nThe system, developed by marine biologists in collaboration with tech experts, monitors water temperature, pH levels, and marine biodiversity in real-time. It has been deployed in several key locations across the Pacific Ocean, with remarkable success rates in coral regeneration.\n\nResearchers report that the AI system can predict coral bleaching events up to two weeks in advance, giving conservationists crucial time to implement protective measures. The technology has already helped restore critical habitats for over 300 marine species.\n\n'This represents a major breakthrough in marine conservation,' says Dr. Sarah Mitchell, lead scientist on the project. 'We're finally able to give coral reefs the fighting chance they need against climate change.'\n\nThe team plans to expand the system to cover additional reef systems in the Caribbean and Indian Ocean by 2026.",
        date: "2025-11-08",
    },
    {
        id: 2,
        title:
            "Europe's Largest Urban Forest Project Exceeds Planting Goals",
        category: "Green World",
        region: "Europe",
        image:
            "https://images.unsplash.com/photo-1567790484933-44b83527e991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMG5hdHVyZSUyMGZvcmVzdHxlbnwxfHx8fDE3NjI4NTgxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        summary:
            "Milan's ambitious green initiative has planted 3 million trees, surpassing its original target by 500,000 trees and creating new habitats for urban wildlife.",
        content:
            "Milan's ambitious green initiative has planted 3 million trees, surpassing its original target by 500,000 trees and creating new habitats for urban wildlife. The project, which began in 2020, has transformed the Italian city into one of Europe's greenest metropolitan areas.\n\nThe urban forest initiative has created over 20 new parks and green corridors throughout the city, connecting previously fragmented natural spaces. Citizens have reported significant improvements in air quality, with particulate matter levels dropping by 18% in areas with the highest tree density.\n\nLocal wildlife has flourished, with bird species increasing by 40% and the return of several native butterfly species that hadn't been seen in the city for decades. The project has also created 2,500 green jobs, from tree maintenance to environmental education.\n\n'What started as an environmental project has become a social movement,' explains Maria Rossi, the city's environmental director. 'Residents have embraced the green transformation, with thousands volunteering for tree planting and maintenance.'\n\nThe success of Milan's project has inspired similar initiatives in Barcelona, Berlin, and Amsterdam, creating a network of European cities committed to urban greening.",
        date: "2025-11-07",
    },
    {
        id: 3,
        title:
            "Breakthrough Treatment Shows Promise in Reversing Type 2 Diabetes",
        category: "Health",
        region: "Americas",
        image:
            "https://images.unsplash.com/photo-1654084982335-d404ccf9c6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwZml0bmVzc3xlbnwxfHx8fDE3NjI3ODUxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        summary:
            "A new therapeutic approach developed in Canada shows 85% success rate in achieving complete remission of type 2 diabetes in clinical trials.",
        content:
            "A new therapeutic approach developed in Canada shows 85% success rate in achieving complete remission of type 2 diabetes in clinical trials. The treatment combines targeted lifestyle modifications with innovative cellular therapy, offering hope to millions of diabetes patients worldwide.\n\nThe groundbreaking study, conducted at the University of Toronto, followed 500 participants over three years. Results showed that 85% of participants achieved complete remission, with normal blood sugar levels maintained without medication for at least 18 months.\n\nThe treatment protocol involves a personalized combination of dietary changes, exercise regimens, and a novel cellular therapy that helps restore insulin sensitivity. Unlike previous approaches, this method focuses on addressing the root causes of the disease rather than just managing symptoms.\n\n'We're not just talking about management anymore—we're talking about actual reversal,' says Dr. James Chen, lead researcher on the study. 'Patients are getting their lives back, free from daily medication and constant monitoring.'\n\nThe therapy has received fast-track approval status from health regulators in Canada and the United States, with plans to make it widely available by early 2026. Several countries in Europe and Asia have also expressed interest in implementing the treatment protocol.",
        date: "2025-11-06",
    },
    {
        id: 4,
        title: "Global Literacy Rate Reaches Historic High of 91%",
        category: "Education",
        region: "Africa",
        image:
            "https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2Mjg3MTg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        summary:
            "UNESCO reports unprecedented progress in global education, with literacy rates climbing to record levels thanks to innovative digital learning programs.",
        content:
            "UNESCO reports unprecedented progress in global education, with literacy rates climbing to record levels thanks to innovative digital learning programs. The global literacy rate has reached 91%, marking the highest level in recorded history and representing a 6% increase over the past decade.\n\nThe dramatic improvement is largely attributed to mobile-based learning initiatives that have reached remote communities previously without access to traditional education infrastructure. Programs in sub-Saharan Africa have been particularly successful, with countries like Rwanda and Kenya seeing literacy rates increase by over 15%.\n\nDigital learning platforms have enabled millions of children and adults to access quality education materials in their native languages, breaking down barriers that previously prevented educational access. The programs use gamification and culturally relevant content to engage learners of all ages.\n\n'Education is the foundation of human development, and we're witnessing a transformation that will impact generations to come,' states Amina Osman, UNESCO's Director of Education. 'These aren't just statistics—they represent millions of individuals gaining the power to shape their own futures.'\n\nThe initiative has also created unexpected benefits, including improved health outcomes, economic development, and greater civic participation in communities with rising literacy rates. Several nations have announced plans to achieve 100% literacy by 2030.",
        date: "2025-11-05",
    },
    {
        id: 5,
        title:
            "Community-Led Initiative Eliminates Food Waste in Amsterdam",
        category: "Community",
        region: "Europe",
        image:
            "https://images.unsplash.com/photo-1542315099045-93937d70c67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGUlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjI3ODI3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        summary:
            "A grassroots network of community fridges and food-sharing programs has reduced household food waste by 94% across the Dutch capital.",
        content:
            "A grassroots network of community fridges and food-sharing programs has reduced household food waste by 94% across the Dutch capital. The initiative, started by a group of neighbors in 2022, has grown into a city-wide movement involving over 250 community collection points.\n\nThe program works by connecting households, restaurants, and grocery stores through a network of publicly accessible refrigerators and dry goods pantries. Surplus food is shared freely among community members, ensuring that edible food reaches people who need it rather than ending up in landfills.\n\nWhat makes this program unique is its entirely volunteer-driven structure. Over 5,000 Amsterdam residents participate as volunteers, managing collection points, organizing food distribution, and maintaining the infrastructure. The initiative has saved an estimated 15 million kilograms of food from waste.\n\n'It started with just four families sharing excess produce from our gardens,' recalls Eva van der Berg, one of the founders. 'Now it's become a movement that's brought our entire city together and virtually eliminated food waste.'\n\nThe success has inspired similar programs in over 50 cities worldwide. Amsterdam's model has become a blueprint for community-led sustainability initiatives, demonstrating the power of collective action in addressing environmental challenges.",
        date: "2025-11-04",
    },
    {
        id: 6,
        title:
            "Solar Energy Costs Drop Below Fossil Fuels in 95% of Markets",
        category: "Green World",
        region: "Asia",
        image:
            "https://images.unsplash.com/photo-1711214622639-42bb82a167e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZXxlbnwxfHx8fDE3NjI4NjU3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        summary:
            "New efficiency breakthroughs make renewable energy the most economical choice globally, accelerating the transition away from fossil fuels.",
        content:
            "New efficiency breakthroughs make renewable energy the most economical choice globally, accelerating the transition away from fossil fuels. Recent data shows that solar energy is now cheaper than coal and natural gas in 95% of global energy markets, marking a historic tipping point in the energy transition.\n\nAdvances in photovoltaic technology and manufacturing efficiency have driven solar panel costs down by 40% in just two years. Combined with improved battery storage solutions, solar energy has become the most cost-effective option for both utility-scale projects and residential installations.\n\nIndia and China are leading the global solar revolution, with both countries exceeding their renewable energy targets five years ahead of schedule. India has added 100 gigawatts of solar capacity in the past year alone, enough to power 60 million homes.\n\n'We're witnessing the end of the fossil fuel era,' declares Dr. Raj Patel, energy economist at the International Renewable Energy Agency. 'The economic argument for clean energy is now stronger than the environmental one, which means the transition will accelerate dramatically.'\n\nInvestment in solar energy has surpassed all other energy sources combined, with global spending reaching $400 billion in 2025. Analysts predict that renewable energy could account for 75% of global electricity generation by 2030.",
        date: "2025-11-03",
    },
    {
        id: 7,
        title:
            "Mental Health Apps Show 78% Improvement in Treatment Outcomes",
        category: "Health",
        region: "Americas",
        image:
            "https://images.unsplash.com/photo-1758691462860-b1b9532c7394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHJlc2VhcmNofGVufDF8fHx8MTc2MjgyNzk5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        summary:
            "Digital mental health platforms are revolutionizing access to care, with studies showing significant improvements in anxiety and depression treatment.",
        content:
            "Digital mental health platforms are revolutionizing access to care, with studies showing significant improvements in anxiety and depression treatment. A comprehensive study across North and South America found that users of evidence-based mental health apps showed a 78% improvement in treatment outcomes compared to traditional waiting-list controls.\n\nThe research, conducted across 12 countries and involving 50,000 participants, demonstrated that app-based interventions combining cognitive behavioral therapy (CBT) with mood tracking and guided meditation achieved results comparable to traditional in-person therapy for mild to moderate cases.\n\nWhat's particularly promising is that these digital tools are reaching populations who previously had limited access to mental health services. In rural areas and underserved communities, where mental health professionals are scarce, these apps are providing life-changing support.\n\n'We're democratizing mental health care,' explains Dr. Sofia Rodriguez, lead researcher on the study. 'People who might have waited months for an appointment can now access effective treatment immediately, from anywhere.'\n\nThe apps also showed high engagement rates, with 65% of users continuing treatment for at least three months. Many platforms now offer multilingual support and culturally adapted content, further expanding their reach and effectiveness.",
        date: "2025-11-02",
    },
    {
        id: 8,
        title:
            "Free Coding Schools Transform Youth Employment Across Africa",
        category: "Education",
        region: "Africa",
        image:
            "https://images.unsplash.com/photo-1573894999291-f440466112cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNjaG9vbCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjI4NzIzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        summary:
            "Innovative tuition-free programming bootcamps have trained 500,000 young people, with 89% finding tech employment within six months of graduation.",
        content:
            "Innovative tuition-free programming bootcamps have trained 500,000 young people, with 89% finding tech employment within six months of graduation. The network of coding schools, operating across 35 African nations, is transforming the continent's technology sector and creating unprecedented opportunities for youth.\n\nThe schools operate on a unique model: students pay nothing upfront and only contribute a percentage of their salary once they secure employment earning above a threshold amount. This approach has eliminated financial barriers and created a pathway to technology careers for talented individuals from all economic backgrounds.\n\nCurriculum focuses on in-demand skills like web development, mobile app creation, and data science, with instruction delivered in local languages alongside English. Many programs also include entrepreneurship training, helping graduates launch their own tech startups.\n\n'Education should be a bridge, not a barrier,' says Kwame Mensah, founder of the largest coding school network. 'We're proving that talent is evenly distributed, but opportunity is not—and we're changing that equation.'\n\nGraduates are finding employment with major tech companies, starting successful businesses, and bringing technological innovation to sectors like agriculture, healthcare, and education. The initiative has inspired similar programs in Southeast Asia and Latin America.",
        date: "2025-11-01",
    },
];