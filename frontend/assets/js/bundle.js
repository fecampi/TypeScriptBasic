/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Student = exports.School = void 0;
var School = (function () {
    function School(name, cnpj) {
        this.Studentes = [];
        this.name = name;
        this.cnpj = cnpj;
    }
    School.prototype.addStudent = function (Student) {
        this.Studentes.push(Student);
    };
    School.prototype.getStudentes = function () {
        for (var _i = 0, _a = this.Studentes; _i < _a.length; _i++) {
            var Student_1 = _a[_i];
            console.log(Student_1);
        }
    };
    return School;
}());
exports.School = School;
var Student = (function () {
    function Student(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Student;
}());
exports.Student = Student;
var school1 = new School('Listoner', '11.111.111/0001-11');
var student1 = new Student('Ane', 'Silv');
var student2 = new Student('Bill', 'Lib');
var student3 = new Student('John', 'Nho');
school1.addStudent(student1);
school1.addStudent(student2);
school1.addStudent(student3);
console.log(school1);
school1.getStudentes();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map