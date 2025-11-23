pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/weasley29/epms.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t epms-backend ./backend'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker stop epms-backend || true
                docker rm epms-backend || true
                docker run -d --name epms-backend -p 4000:4000 epms-backend
                '''
            }
        }
    }
}
