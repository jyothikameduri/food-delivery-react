import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url: "https://dummy.jpg",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/jyothikameduri");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { avatar_url, name, location } = this.state.userInfo;
    return (
      <div className="min-h-screen  flex flex-col justify-center items-center px-4 md:px-10 py-16 mt-10 overflow-x-hidden">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center mb-12 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400">
            Where Hunger Meets Innovation
          </span>
          <br />
          <span className="text-gray-800">Behind the Scenes of QuikiEats</span>
        </h1>

        {/* Two-Section Flex Layout */}
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-[90rem]">
          {/* Host Section */}
          <div className="md:w-1/3 w-full bg-white shadow-2xl rounded-3xl p-6 flex flex-col items-center text-center">
            <img
              className="w-36 h-36 rounded-full border-4 border-green-100 shadow-lg"
              src={avatar_url}
              alt="Profile"
            />
            <h2 className="text-xl font-bold mt-4 text-indigo-700">
              About the Host
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Get to know the person behind the project
            </p>

            <div className="mt-6 text-gray-700 text-sm space-y-2">
              <p>
                <span className="font-semibold">Name:</span> {name}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                jyothikameduri@gmail.com
              </p>
            </div>

            <p className="italic text-gray-400 text-xs mt-6 mb-6">
              "Passionate about coding, creative web design, and solving
              real-world problems."
            </p>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold mt-4 text-indigo-700 py-2">
                Contact Me
              </h3>
              <div className="flex justify-center gap-6 items-center">
                <a
                  href="mailto:jyothikameduri@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Email"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jyothikameduri/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <a
                  href="https://github.com/jyothikameduri"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 w-full shadow-inner rounded-3xl p-8 text-gray-800 leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              About QuikiEats Project
            </h2>

            <p className="mb-4">
              <strong>QuikiEats</strong> is a modern and intuitive food delivery
              web application built using <strong>React.js</strong> and styled
              with <strong>TailwindCSS</strong>. Inspired by real-world delivery
              platforms like Swiggy, it offers a seamless user experience with
              clean UI, efficient performance, and rich features.
            </p>

            <p className="mb-4">
              Whether you're browsing a restaurant’s menu, filtering items based
              on dietary preferences (like Veg/Non-Veg), or managing your cart —
              every interaction is smooth and responsive. The application is
              fully responsive and optimized for both desktop and mobile users,
              ensuring accessibility from anywhere.
            </p>

            <p className="mb-4">
              Behind the scenes, the app makes API calls to fetch dynamic
              restaurant and menu data. It uses modular component design, proper
              state management, and conditional rendering for a real-time,
              user-friendly flow.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-700">
              What’s on the Plate?
            </h3>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Dynamic restaurant listings fetched using Swiggy API structure
              </li>
              <li>Category-wise menu filtering (Veg, Non-Veg, Bestsellers)</li>
              <li>Interactive cart with quantity controls and total billing</li>
              <li>Shimmer UI while loading for a professional touch</li>
              <li>Component reusability with clean and maintainable code</li>
              <li>
                Fully responsive design built with Tailwind utility classes
              </li>
            </ul>

            <p className="mt-6 italic text-sm text-gray-600">
              "QuikiEats represents my commitment to developing practical,
              real-world solutions with a strong emphasis on user interface
              design, performance optimization, and meticulous attention to
              detail."
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Built with ❤️ using <strong>React</strong>,{" "}
              <strong>TailwindCSS</strong>, and modern development practices
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
