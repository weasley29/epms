pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/weasley29/epms.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh 'docker build -t epms-backend ./backend'
            }
        }

        stage('Run Backend Container') {
            steps {
                sh '''
                    docker stop epms-backend || true
                    docker rm epms-backend || true
                    docker run -d --name epms-backend -p 4000:4000 epms-backend
                '''
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t epms-frontend ./frontend'
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh '''
                    docker stop epms-frontend || true
                    docker rm epms-frontend || true
                    docker run -d --name epms-frontend -p 5173:80 epms-frontend
                '''
            }
        }
    }
}
