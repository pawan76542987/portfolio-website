import { Principle } from '@/types';

export const principlesData: Principle[] = [
  {
    number: '01',
    title: 'Start with the Problem, Not the Framework',
    summary: 'Understand the user and the concrete objective before choosing technology or writing code.',
    deepDive:
      'Technology is a multiplier for clarity. Before reaching for heavy libraries or complex architectural abstractions, I identify what the user actually needs to accomplish and where the real constraints lie.',
    technicalImpact: 'Prevents over-engineering and keeps dependency footprints lean and purposeful.',
  },
  {
    number: '02',
    title: 'Keep Complexity Intentional',
    summary: 'Use abstraction only when it genuinely improves maintainability or solves real friction.',
    deepDive:
      'Every line of code is a liability to be maintained. I prefer readable, explicit code with well-defined boundaries over clever indirection or premature generalized patterns.',
    technicalImpact: 'Results in codebases that are approachable for teammates and easy to debug under pressure.',
  },
  {
    number: '03',
    title: 'Performance is a Fundamental Feature of UX',
    summary: 'Fast interfaces are not an optimization afterthought—they shape user trust.',
    deepDive:
      'Sub-millisecond visual feedback, zero layout shifts, optimized asset pipelines, and sensible resource budgeting transform a sluggish webpage into a tactile, digital tool.',
    technicalImpact: 'Prioritizes Core Web Vitals (LCP, INP, CLS) from day zero of development.',
  },
  {
    number: '04',
    title: 'Build Systems, Not Isolated Screens',
    summary: 'Reusable tokens, components, and predictable layouts make products effortless to evolve.',
    deepDive:
      'Designing with a systemic perspective means that spacing tokens, typography hierarchies, and component states are composed coherently, ensuring visual harmony across every viewport.',
    technicalImpact: 'Enables rapid feature velocity and consistent visual hierarchy.',
  },
  {
    number: '05',
    title: 'Make Technical Decisions Visible & Honest',
    summary: 'Clear rationale, transparent trade-offs, and verifiable code over marketing buzzwords.',
    deepDive:
      'Great engineering speaks through working software, measurable performance, clean commit history, and honest communication of technical trade-offs.',
    technicalImpact: 'Ensures reliable delivery and fosters genuine stakeholder trust.',
  },
];
