### README for MENCER ED TECH

#### Project Description
MENCER is a decentralized EdTech platform built on the Internet Computer Protocol (ICP) designed to provide comprehensive education in blockchain and Web3 technologies. The project includes both a frontend and backend component to deliver a seamless educational experience with advanced features like decentralized governance and blockchain certifications.

---

### Frontend

#### Key Features

- **Responsive User Interface**: Built with ReactJS and WebAssembly for optimal performance.
- **Multilingual Support**: AI-powered translation for global accessibility.
- **Blockchain Interaction**: Integrates with ICP for verifying certifications and rewards.
- **User Dashboard**: Displays course progress, rewards, and certifications.
- **Decentralized Authentication**: Uses Self-Sovereign Identity solutions for secure user management.
- **Interactive Learning Modules**: Engaging lessons with real-time progress tracking.

#### Tech Stack

- **Framework**: ReactJS
- **Performance**: WebAssembly (Wasm)
- **Styling**: Tailwind CSS, Styled Components
- **API Integration**: ICP Blockchain API, BigChainDB API
- **State Management**: Redux or Context API

#### Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mencer-frontend.git
   ```

2. Navigate to the frontend directory:
   ```bash
   cd mencer-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

#### Testing

- Run unit tests:
   ```bash
   npm test
   ```

- Run end-to-end tests (if applicable):
   ```bash
   npm run e2e
   ```

---

### Backend

#### Key Features

- **Decentralized Governance**: Managed via DAO with Motoko smart contracts.
- **Blockchain Certifications**: On-chain storage and verification of credentials.
- **Tokenized Rewards**: Incentives for course completion and community contributions.
- **Self-Sovereign Identity**: Secure management of user identities and educational records.
- **Secure Data Storage**: End-to-end encryption with tamper-proof data storage on ICP.

#### Tech Stack

- **Languages**: Rust, Motoko
- **Blockchain**: Internet Computer Protocol (ICP)
- **Smart Contract Framework**: ICP SDK
- **Database**: BigChainDB (for off-chain data)
- **API**: ICP Blockchain API, BigChainDB API
- **Containerization**: Docker (for local development and testing)

#### Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mencer-backend.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd mencer-backend
   ```

3. Install dependencies:
   ```bash
   cargo install
   ```

4. Build and deploy smart contracts using the ICP SDK:
   ```bash
   dfx deploy
   ```

5. Run the backend server:
   ```bash
   cargo run
   ```

#### API Endpoints

- **POST** `/users/create`: Create a new user with self-sovereign identity.
- **GET** `/users/:id`: Retrieve user information and certifications.
- **POST** `/courses/enroll`: Enroll a user in a course and assign token rewards.
- **GET** `/courses/:id`: Fetch course details and progress.
- **POST** `/certifications/verify`: Verify blockchain-based certifications.

#### Smart Contracts

The backend integrates with smart contracts written in **Motoko** and deployed on the ICP, handling:
- **Token Distribution**: Automated reward distribution based on course completion.
- **DAO Governance**: Decentralized decision-making via voting and proposals.

#### Testing

- Run unit tests:
   ```bash
   cargo test
   ```

- Deploy and test smart contracts locally:
   ```bash
   dfx start
   dfx deploy
   ```

#### Deployment

1. Build the Docker image:
   ```bash
   docker build -t mencer-backend .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:8080 mencer-backend
   ```

---

## Contributors:
[name]: [github](https://github.com/username)

### License

This project is licensed under the MIT License.

