var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-ch1-not-and-or",
  "level": "1",
  "url": "sec-ch1-not-and-or.html",
  "type": "Section",
  "number": "1.1",
  "title": "First Connectives: Not, And, and Or",
  "body": " First Connectives: Not, And, and Or  In this section we define three logical connectives.     logical negation    The negation of a statement , denoted , is the statement: \"It is not the case that .\"  In casual conversation, we refer to the negation of a proposition as \"not \".  If we know the truth value of , then has exactly the opposite truth value. We denote this relationship with a truth table . In fact, we can take the truth table to be the defintion of the negation connective.   Truth Table for Negation    T F  F T       Negating statements  The negation of the statement, \"Hamilton College is located in Clinton, NY\" is the statement, \"It is not the case that Hamilton College is located in Clinton, NY,\" or, \"Hamilton College is not located in Clinton, NY.\"   Some logical connectives take two statements. The first of these is the logical \"and\" which we call conjunction.     logical cojunction    The conjunction of two statements and , denoted , is the statement, \" and .\"  In casual conversation, we refer to the conjunction as \" and \".  Conjunction is defined by the truth table below.   Truth Table for Conjunction    T T T  T F F  F T F  F F F       Consider the unambiguously false statement, \"A banana is a natural number.\" Then the statement, \"A banana is a natural number and \" is false no matter what statement follows the \"and.\" In order for a conjunction of two statements to be true, both original statements must be true.   The next connective is the logical \"or\" which we call disjunction.     logical disjunction    The disjunction of two statements and , denoted , is the statement, \" or .\"  In casual conversation, we refer to the disjunction as \" or \".  Disjunction is defined by the truth table below.   Truth Table for Disjunction    T T T  T F T  F T T  F F F       Consider the unambiguously false statement, \"A banana is a natural number.\" Then the statement, \"A banana is a natural number and \" is only false if the statement is false.   "
},
{
  "id": "sec-ch1-not-and-or-3",
  "level": "2",
  "url": "sec-ch1-not-and-or.html#sec-ch1-not-and-or-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "   logical negation    The negation of a statement , denoted , is the statement: \"It is not the case that .\"  In casual conversation, we refer to the negation of a proposition as \"not \".  If we know the truth value of , then has exactly the opposite truth value. We denote this relationship with a truth table . In fact, we can take the truth table to be the defintion of the negation connective.   Truth Table for Negation    T F  F T     "
},
{
  "id": "sec-ch1-not-and-or-4",
  "level": "2",
  "url": "sec-ch1-not-and-or.html#sec-ch1-not-and-or-4",
  "type": "Example",
  "number": "1.1.3",
  "title": "Negating statements.",
  "body": " Negating statements  The negation of the statement, \"Hamilton College is located in Clinton, NY\" is the statement, \"It is not the case that Hamilton College is located in Clinton, NY,\" or, \"Hamilton College is not located in Clinton, NY.\"  "
},
{
  "id": "sec-ch1-not-and-or-6",
  "level": "2",
  "url": "sec-ch1-not-and-or.html#sec-ch1-not-and-or-6",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "   logical cojunction    The conjunction of two statements and , denoted , is the statement, \" and .\"  In casual conversation, we refer to the conjunction as \" and \".  Conjunction is defined by the truth table below.   Truth Table for Conjunction    T T T  T F F  F T F  F F F     "
},
{
  "id": "sec-ch1-not-and-or-7",
  "level": "2",
  "url": "sec-ch1-not-and-or.html#sec-ch1-not-and-or-7",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " Consider the unambiguously false statement, \"A banana is a natural number.\" Then the statement, \"A banana is a natural number and \" is false no matter what statement follows the \"and.\" In order for a conjunction of two statements to be true, both original statements must be true.  "
},
{
  "id": "sec-ch1-not-and-or-9",
  "level": "2",
  "url": "sec-ch1-not-and-or.html#sec-ch1-not-and-or-9",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": "   logical disjunction    The disjunction of two statements and , denoted , is the statement, \" or .\"  In casual conversation, we refer to the disjunction as \" or \".  Disjunction is defined by the truth table below.   Truth Table for Disjunction    T T T  T F T  F T T  F F F     "
},
{
  "id": "sec-ch1-not-and-or-10",
  "level": "2",
  "url": "sec-ch1-not-and-or.html#sec-ch1-not-and-or-10",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": " Consider the unambiguously false statement, \"A banana is a natural number.\" Then the statement, \"A banana is a natural number and \" is only false if the statement is false.  "
},
{
  "id": "ch-chapter-1-connectives-4",
  "level": "1",
  "url": "ch-chapter-1-connectives-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Compound Statements",
  "body": " Compound Statements  Negation is a function of one binary variable (that is, we \"plug in\" one statement). Conjunctions and disjunctions are functions of two binary variables (that is, we \"plug in\" two statements). We can compose logical connectives just as we can compose functions to create compound statements .  Consider the statement : \"It is not the case that ( and ).\"   Truth Table for    T T T F  T F F T  F T F T  F F F T    For the statement to be true, we see that we need one of or to be false (not necessarily both). That is, the truth value should match the truth value of the compound statement . To verify this, we look at the truth table for the statement : \"(Not ) or (not ).\"   Truth Table for    T T F F F  T F F T T  F T T F T  F F T T T    We can see from the final column of these truth tables that the statements and correspond to the same function of and .     logical equivalence    In general, a compound statement is a complex statement built from simple statements , , and so on. We typically reserve the capital letters , , (and so on) to denote compound statements. Two compound statements and (made up of the same constituent statements) are logically equivalent provided their truth tables have the same final column. We denote this equivalence .    Logical equivalence allows us to manipulate compound statements without changing their truth tables. This helps us determine how to negate compound statements.   De Morgan's Laws   For any statements and ,    , and     .        The Law of the Double Negative   For any statement ,     "
},
{
  "id": "ch-chapter-1-connectives-4-2",
  "level": "2",
  "url": "ch-chapter-1-connectives-4.html#ch-chapter-1-connectives-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "compound statements "
},
{
  "id": "ch-chapter-1-connectives-4-4",
  "level": "2",
  "url": "ch-chapter-1-connectives-4.html#ch-chapter-1-connectives-4-4",
  "type": "Table",
  "number": "1.2.1",
  "title": "Truth Table for <span class=\"process-math\">\\(\\lnot(p\\land q)\\)<\/span>",
  "body": " Truth Table for    T T T F  T F F T  F T F T  F F F T   "
},
{
  "id": "ch-chapter-1-connectives-4-6",
  "level": "2",
  "url": "ch-chapter-1-connectives-4.html#ch-chapter-1-connectives-4-6",
  "type": "Table",
  "number": "1.2.2",
  "title": "Truth Table for <span class=\"process-math\">\\((\\lnot p) \\lor (\\lnot q)\\)<\/span>",
  "body": " Truth Table for    T T F F F  T F F T T  F T T F T  F F T T T   "
},
{
  "id": "def-equivalence",
  "level": "2",
  "url": "ch-chapter-1-connectives-4.html#def-equivalence",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "   logical equivalence    In general, a compound statement is a complex statement built from simple statements , , and so on. We typically reserve the capital letters , , (and so on) to denote compound statements. Two compound statements and (made up of the same constituent statements) are logically equivalent provided their truth tables have the same final column. We denote this equivalence .   "
},
{
  "id": "thm-de-Morgan",
  "level": "2",
  "url": "ch-chapter-1-connectives-4.html#thm-de-Morgan",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "De Morgan’s Laws.",
  "body": " De Morgan's Laws   For any statements and ,    , and     .      "
},
{
  "id": "thm-double-neg",
  "level": "2",
  "url": "ch-chapter-1-connectives-4.html#thm-double-neg",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "The Law of the Double Negative.",
  "body": " The Law of the Double Negative   For any statement ,    "
},
{
  "id": "ch-chapter-1-connectives-5",
  "level": "1",
  "url": "ch-chapter-1-connectives-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Conditional and Biconditional Statements",
  "body": " Conditional and Biconditional Statements  The last two logical connectives deal with implication.     Logical implication    The compound statement \"if , then \" or \" implies \" is called an implication or a conditional statement , denoted , where is referred to as the hypothesis or premise and is referred to as the conclusion . The implication is defined by the truth table below.  Truth Table for Implication    T T T  T F F  F T T  F F T   An implication in which the premise is false is called vacuously true .    You may be looking at the last two rows of the truth table and wondering what's going on. For lay people, the statement is meaningless when is false. But then wouldn't be a statement. Statements must have a truth value!   Consider the statement, \"If two is odd, then one is even.\" The constituent statements \"two is odd\" and \"one is even\" are both false, and the compound statement is defined to true. Any implication with the premise \"two is odd\" is vacuously true.   In formal mathematical logic, no causation in implied by an if-then statement. That is, the statement, \"If it's raining, then it's wet outside\" doesn't the same thing as, \"It's wet outside because it is raining.\" For all we know, it could be wet outside because someone sprayed everything down with a fire hose. And so, even though the statement, \"If , then Mars is a planet,\" is a true statement, we don't infer that the truth of the conclusion is dependent on its causal relationship to the premise (\"Mars is a planet\" is true regardless of arithmetic!).   Negating Implications   For any statements and ,    , and     .        We see from the truth tables for and that these statements are logically equivalent. Indeed, we have  Truth Table Verification fpr     T T T F F F  T F F T T T  F T T F F F  F F T F T F   as desired.  For the remaining equivalence, we have    There are three implications that are related to the statement , and they are defined as follows.    Let and be statements and consider the implication . The converse of is the statement . The inverse of is the statement . The contrapositive of is the statement .    Observe that the implication is logically equivalent to its contrapositive . The converse is logically equivalent to the inverse .    Let be the statement, \"It's raining,\" and be the statement, \"It's wet outside.\" Match the sentences to the correct compound statements.    Implication  If it's raining, then it's wet outside.    Converse of  If it's wet ouside, then it's raining.    Inverse of  If it's not raining, then it's not wet outside.    Contrapositive of  If it's not wet outside, then it's not raining.    "
},
{
  "id": "def-implication",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#def-implication",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "   Logical implication    The compound statement \"if , then \" or \" implies \" is called an implication or a conditional statement , denoted , where is referred to as the hypothesis or premise and is referred to as the conclusion . The implication is defined by the truth table below.  Truth Table for Implication    T T T  T F F  F T T  F F T   An implication in which the premise is false is called vacuously true .   "
},
{
  "id": "ch-chapter-1-connectives-5-5",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-5",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " Consider the statement, \"If two is odd, then one is even.\" The constituent statements \"two is odd\" and \"one is even\" are both false, and the compound statement is defined to true. Any implication with the premise \"two is odd\" is vacuously true.  "
},
{
  "id": "thm-neg-imp",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#thm-neg-imp",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Negating Implications.",
  "body": " Negating Implications   For any statements and ,    , and     .      "
},
{
  "id": "ch-chapter-1-connectives-5-8",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-8",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " We see from the truth tables for and that these statements are logically equivalent. Indeed, we have  Truth Table Verification fpr     T T T F F F  T F F T T T  F T T F F F  F F T F T F   as desired.  For the remaining equivalence, we have   "
},
{
  "id": "def-implications-related",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#def-implications-related",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  Let and be statements and consider the implication . The converse of is the statement . The inverse of is the statement . The contrapositive of is the statement .   "
},
{
  "id": "ch-chapter-1-connectives-5-12",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-12",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "",
  "body": "  Let be the statement, \"It's raining,\" and be the statement, \"It's wet outside.\" Match the sentences to the correct compound statements.    Implication  If it's raining, then it's wet outside.    Converse of  If it's wet ouside, then it's raining.    Inverse of  If it's not raining, then it's not wet outside.    Contrapositive of  If it's not wet outside, then it's not raining.   "
},
{
  "id": "logic",
  "level": "1",
  "url": "logic.html",
  "type": "Section",
  "number": "A.1",
  "title": "Logic",
  "body": " Logic  Authors should adhere to the rules of logic in such a way that their readers understand what logical techniques they are employing.  In other words, the authors...   state claims (propositions, theorems, lemmas, etc.) as logical statements;  state claims appropriate to the assigned problem;  write proofs with first and last sentences that indicate the proof technique they are using;*  define notation and symbols before using them;  employ a valid proof technique for the statement as written;  employ a valid proof technique for the statement appropriate to the problem;  include all necessary cases in the proof;  write examples with a clear topic sentence;  write prose using evidence to support claims;  employ sound logic even in mathematical prose.   *this criterion relaxes a bit after the first proofs course; if you're proving a theorem directly, you can just get to the proof without repeating the hypotheses at the beginning of the proof. But if you're in your first proofs course, please include the first and last sentences that lay out your hypotheses and conclusions!  "
},
{
  "id": "mathematics",
  "level": "1",
  "url": "mathematics.html",
  "type": "Section",
  "number": "A.2",
  "title": "Mathematics",
  "body": " Mathematics  The authors...   use definitions, theorems, and other results from the appropriate source(s) or chapter(s);  cite definitions, theorems, and other results from the appropriate source(s) or chapter(s);  cite named definitions, theorems, and results;  employ correct calculations;  address all cases and subcases;  do not re-prove prior results.   "
},
{
  "id": "style",
  "level": "1",
  "url": "style.html",
  "type": "Section",
  "number": "A.3",
  "title": "Style",
  "body": " Style  The authors...   use the appropriate LaTeX template for the course;  adhere to mathematical style conventions, such as:   using math mode for math symbols,  writing sentences that do not start in math mode,  not writing \"two-column\" proofs reminiscent of a high school geometry class,  using aligned equations when a string of equations is too long for a page,  using inline equations for minor mathematical manipulations,  using appropriate LaTeX environments (proof, prop*, example*, etc);    discern when to write an example instead of a proposition and proof;  adhere to the conventions of grammar;  write clearly and concisely in a way that does not obscure the logic or mathematics.   "
},
{
  "id": "examples",
  "level": "1",
  "url": "examples.html",
  "type": "Section",
  "number": "A.4",
  "title": "Examples (and how to write them)",
  "body": " Examples (and how to write them)  Here's a note about the difference between a proposition in math (versus formal logic). In math, we understand propositions (and theorems, lemmas, corollaries, etc.) to be statements that are true (and proved\/provable) so that we can cite them when we need to use them. You can see the confusion that would ensue if a paper contained \"Proposition 1: All even integers are prime\" under that assumption, even if followed immediately by a counterexample! So, if you are showing that a statement is not true as part of a writing assignment, here's what that might look like:   Example  It is not the case that every even integer is prime. Notice that the integer is even. Although divides , it divides neither nor . Therefore, by (definition of prime\/proposition about prime numbers\/whatever it is), is not prime.   To break that down into more of a template:   Example   [Topic sentence: what's the point of this example?]  [Supporting mathematical evidence, less formal than a proof, but still following the stylistic conventions of good mathematical writing!]  [Concluding sentence.]    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
