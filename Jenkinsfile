pipeline{
    agent any
    
    stages{
        stage('Back-End Clone'){
            steps{
                git 'https://github.com/GustavoBoscoGit/SistemaAutoAjuda.git'
            }
        }
        stage('SonarQube back-end'){
            steps{
                withSonarQubeEnv('sonarqube-9.5'){
                    bat 'sonar-scanner.bat -D"sonar.projectKey=test_project" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=sqp_b47c50c02736c28ec6121713b814399e8cc23fab"'   
                }
            }
        }
        stage('Front-End Clone'){
            steps{
                git 'https://github.com/wilsonmarutti/pac-frontend.git'
            }
        }
        stage('SonarQube front-end'){
            steps{
                withSonarQubeEnv('sonarqube-9.5'){
                    bat 'sonar-scanner.bat -D"sonar.projectKey=front-end" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=sqp_e8ed361f086d3c151e52ca3be695f7c8b82a4404"' 
                }
            }
        }
        stage('Automated tests'){
            steps{
                echo 'Automation in progress...'
            }
        }
        stage('Deploy back-end'){
            steps{
                echo 'Deploy in progress...'
            }
        }
        stage('Deploy front-end'){
            steps{
                echo 'Deploy in progress...'
            }
        }
    }
}