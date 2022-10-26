import Results from "../components/Results";
import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);
describe("Results", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Results
        points={0}
        totalPoints={10}
        generalCSQuestionsCorrect={0}
        cssQuestionsCorrect={0}
        agileQuestionsCorrect={0}
        accessibilityQuestionsCorrect={0}
        resetQuiz={undefined}
        show={false}
        hideResultsBreakdown={undefined}
        gitQuestionsCorrect={0}
        htmlQuestionsCorrect={0}
        infoTechQuestionsCorrect={0}
        javascriptQuestionsCorrect={0}
        linuxQuestionsCorrect={0}
        pythonQuestionsCorrect={0}
        qualityAssuranceQuestionsCorrect={0}
        securityQuestionsCorrect={0}
        sqlQuestionsCorrect={0}
      />,
      div
    );
  });
  it("Displays the accurate score for wrong answers", () => {
    const { getByText } = render(
      <Results
        points={0}
        totalPoints={10}
        generalCSQuestionsCorrect={0}
        cssQuestionsCorrect={0}
        agileQuestionsCorrect={0}
        accessibilityQuestionsCorrect={0}
        resetQuiz={undefined}
        show={false}
        hideResultsBreakdown={undefined}
        gitQuestionsCorrect={0}
        htmlQuestionsCorrect={0}
        infoTechQuestionsCorrect={0}
        javascriptQuestionsCorrect={0}
        linuxQuestionsCorrect={0}
        pythonQuestionsCorrect={0}
        qualityAssuranceQuestionsCorrect={0}
        securityQuestionsCorrect={0}
        sqlQuestionsCorrect={0}
      />
    );
    expect(
      getByText("You received 0 out of 10 points").textContent
    ).toBeDefined();
  });
  it("Displays the perfect score message if all answers are correct", () => {
    const { getByText } = render(
      <Results
        points={10}
        totalPoints={10}
        generalCSQuestionsCorrect={0}
        cssQuestionsCorrect={0}
        agileQuestionsCorrect={0}
        accessibilityQuestionsCorrect={0}
        resetQuiz={undefined}
        show={false}
        hideResultsBreakdown={undefined}
        gitQuestionsCorrect={0}
        htmlQuestionsCorrect={0}
        infoTechQuestionsCorrect={0}
        javascriptQuestionsCorrect={0}
        linuxQuestionsCorrect={0}
        pythonQuestionsCorrect={0}
        qualityAssuranceQuestionsCorrect={0}
        securityQuestionsCorrect={0}
        sqlQuestionsCorrect={0}
      />
    );
    expect(
      getByText("Wow! Perfect Score! 10 out of 10 points").textContent
    ).toBeDefined();
  });
});
