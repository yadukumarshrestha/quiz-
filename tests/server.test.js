 
// test/server.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');
const { expect } = chai;

chai.use(chaiHttp);

describe('Server API tests', () => {
    it('should get all questions', (done) => {
        chai.request(server)
            .get('/api/admin/questions')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should add a new question', (done) => {
        chai.request(server)
            .post('/api/admin/questions')
            .send({
                question: 'What is 2 + 2?',
                options: ['3', '4', '5'],
                correctAnswer: '4'
            })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body.message).to.equal('Question added successfully');
                done();
            });
    });
    
    // Add more tests for other endpoints as needed
});
