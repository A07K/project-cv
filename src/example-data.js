import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Aditya Kushwaha",
    email: "kushwaha07adity@gmail.com",
    phoneNumber: "+91 9326690000",
    address: "Mumbai, Maharshtra",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Engineering",
        schoolName: "Vivekanand Education Society's Institute Of Technology",
        location: "Chembur, Mumbai",
        startDate: "01/2020",
        endDate: "04/2024",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Master of Business Administration",
        schoolName: "Hidden University",
        location: "Maharashtra, India",
        startDate: "08/2024",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Umbrella Inc.",
        positionTitle: "UX & UI Designer",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "Black Mesa Labs",
        positionTitle: "UX Research Assistant",
        location: "Berlin, Germany",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
