# 3am
a fun project ive been wanting to do . maybe recruit some armchair detectives from across the us to donate some time. 
# 3AM Productions - Investigative Journalism Platform

![3AM Productions](src/assets/images/logo.png)

## About The Project

3AM Productions is a cutting-edge investigative journalism platform dedicated to uncovering truth and promoting transparency. Our platform combines innovative web technology with serious journalism to create an engaging, secure, and interactive space for investigative reporting.

### Built With
* HTML5
* CSS3/SASS
* JavaScript
* [GSAP](https://greensock.com/gsap/) - For animations
* [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

* Node.js (v14.0.0 or higher)
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repository
```sh
git clone https://github.com/yourusername/3am-productions.git
```

2. Install NPM packages
```sh
npm install
```

3. Start the development server
```sh
npm start
```

## Project Structure
```
3am-productions/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── videos/
│   │   └── fonts/
│   ├── styles/
│   │   ├── main.css
│   │   └── components/
│   ├── js/
│   │   ├── main.js
│   │   └── components/
│   └── pages/
│       ├── index.html
│       ├── forum.html
│       └── investigations.html
├── README.md
├── .gitignore
└── package.json
```

## Features

### Current Features
- Responsive, mobile-first design
- Interactive investigation showcase
- Secure tips submission system
- Comment system
- Newsletter integration
- Social sharing capabilities

### Upcoming Features
- User authentication
- Advanced search functionality
- Interactive timelines
- Document viewer
- Podcast integration
- Member portal

## Development Guidelines

### Code Style
- Use 2 spaces for indentation
- Follow BEM methodology for CSS
- Use ES6+ JavaScript features
- Comment complex functionality
- Keep functions small and focused

### Git Workflow
1. Create a new branch for each feature
```sh
git checkout -b feature/feature-name
```

2. Commit your changes
```sh
git commit -m "Description of changes"
```

3. Push to the branch
```sh
git push origin feature/feature-name
```

4. Open a Pull Request

### Commit Message Guidelines
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests when relevant

## Security Considerations

### For Contributors
- Never commit sensitive information
- Use environment variables for configuration
- Follow secure coding practices
- Report security vulnerabilities privately

### For Users
- Enable 2FA when available
- Use secure communication channels for sensitive information
- Follow provided security guidelines for submissions

## Testing

Run tests using:
```sh
npm test
```

### Testing Guidelines
- Write tests for new features
- Maintain test coverage above 80%
- Test across multiple browsers
- Include mobile device testing

## Deployment

The site uses GitHub Actions for CI/CD. Merging to main will automatically deploy to staging.

### Production Deployment
```sh
npm run build
npm run deploy
```

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/yourusername/3am-productions](https://github.com/yourusername/3am-productions)

## Acknowledgments
* [Font Awesome](https://fontawesome.com)
* [GSAP](https://greensock.com/gsap/)
* [Normalize.css](https://necolas.github.io/normalize.css/)

## Development Status

Current Version: 1.0.0-alpha

### Version Goals
- v1.0.0-alpha: Basic site structure and design
- v1.0.0-beta: Core features implementation
- v1.0.0: Initial public release
- v1.1.0: User system implementation
- v2.0.0: Advanced features and optimization
