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
  "id": "ch-introduction",
  "level": "1",
  "url": "ch-introduction.html",
  "type": "Preface",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  In many mathematics courses, students learn how to apply known, established mathematical facts to problems that need solutions: \"Farmer Bill wants to build a rectangular pen for his sheep with 25 yards of fence material, and he would like to maximize their grazing potential. Find the dimensions of the pen he should build.\" This type of education is important, but it is also incomplete. It does not help a student learn to create mathematics.  In contrast, mathematical reasoning, built upon the foundation of formal logic, is the art of deducing consequences from basic assumptions. Over time, these consequences (called theorems among other names) invoke fewer of the basic assumptions (called axioms ) and instead rely on secondary axioms, defintions, and other theorems. As a body, mathematicians have agreed upon a specialized dialect designed to clearly and precisely describe mathematical ideas to one another. In a very small nutshell, this is why mathematicians write proofs.  This short primer is designed to introduce this dialect, built upon formal logic, so that fledgling mathematicians may begin to discover, prove, and communicate new mathematics. Moreover, it is a work in progress by Professor Gibbons; if you have comments, criticisms, or suggestions for improvement, don't hesitate to let her know.  "
},
{
  "id": "sec-ch1-not-and-or",
  "level": "1",
  "url": "sec-ch1-not-and-or.html",
  "type": "Section",
  "number": "1.1",
  "title": "First Connectives: Not, And, and Or",
  "body": " First Connectives: Not, And, and Or  In this section we define three logical connectives.     logical negation    The negation of a statement , denoted , is the statement: \"It is not the case that .\"  In casual conversation, we refer to the negation of a proposition as \"not \".  If we know the truth value of , then has exactly the opposite truth value. We denote this relationship with a truth table . In fact, we can take the truth table to be the defintion of the negation connective.   Truth Table for Negation        T  F    F  T        Negating statements  The negation of the statement, \"Hamilton College is located in Clinton, NY\" is the statement, \"It is not the case that Hamilton College is located in Clinton, NY,\" or, \"Hamilton College is not located in Clinton, NY.\"   Some logical connectives take two statements. The first of these is the logical \"and\" which we call conjunction.     logical cojunction    The conjunction of two statements and , denoted , is the statement, \" and .\"  In casual conversation, we refer to the conjunction as \" and \".  Conjunction is defined by the truth table below.   Truth Table for Conjunction         T  T  T    T  F  F    F  T  F    F  F  F        Consider the unambiguously false statement, \"A banana is a natural number.\" Then the statement, \"A banana is a natural number and \" is false no matter what statement follows the \"and.\" In order for a conjunction of two statements to be true, both original statements must be true.   The next connective is the logical \"or\" which we call disjunction.     logical disjunction    The disjunction of two statements and , denoted , is the statement, \" or .\"  In casual conversation, we refer to the disjunction as \" or \".  Disjunction is defined by the truth table below.   Truth Table for Disjunction         T  T  T    T  F  T    F  T  T    F  F  F        Consider the unambiguously false statement, \"A banana is a natural number.\" Then the statement, \"A banana is a natural number and \" is only false if the statement is false.   "
},
{
  "id": "sec-ch1-not-and-or-3",
  "level": "2",
  "url": "sec-ch1-not-and-or.html#sec-ch1-not-and-or-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "   logical negation    The negation of a statement , denoted , is the statement: \"It is not the case that .\"  In casual conversation, we refer to the negation of a proposition as \"not \".  If we know the truth value of , then has exactly the opposite truth value. We denote this relationship with a truth table . In fact, we can take the truth table to be the defintion of the negation connective.   Truth Table for Negation        T  F    F  T      "
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
  "body": "   logical cojunction    The conjunction of two statements and , denoted , is the statement, \" and .\"  In casual conversation, we refer to the conjunction as \" and \".  Conjunction is defined by the truth table below.   Truth Table for Conjunction         T  T  T    T  F  F    F  T  F    F  F  F      "
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
  "body": "   logical disjunction    The disjunction of two statements and , denoted , is the statement, \" or .\"  In casual conversation, we refer to the disjunction as \" or \".  Disjunction is defined by the truth table below.   Truth Table for Disjunction         T  T  T    T  F  T    F  T  T    F  F  F      "
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
  "body": " Compound Statements  Negation is a function of one binary variable (that is, we \"plug in\" one statement). Conjunctions and disjunctions are functions of two binary variables (that is, we \"plug in\" two statements). We can compose logical connectives just as we can compose functions to create compound statements .  Consider the statement : \"It is not the case that ( and ).\"   Truth Table for          T  T  T  F    T  F  F  T    F  T  F  T    F  F  F  T     For the statement to be true, we see that we need one of or to be false (not necessarily both). That is, the truth value should match the truth value of the compound statement . To verify this, we look at the truth table for the statement : \"(Not ) or (not ).\"   Truth Table for           T  T  F  F  F    T  F  F  T  T    F  T  T  F  T    F  F  T  T  T     We can see from the final column of these truth tables that the statements and correspond to the same function of and .     logical equivalence    In general, a compound statement is a complex statement built from simple statements , , and so on. We typically reserve the capital letters , , (and so on) to denote compound statements. Two compound statements and (made up of the same constituent statements) are logically equivalent provided their truth tables have the same final column. We denote this equivalence .    Logical equivalence allows us to manipulate compound statements without changing their truth tables. This helps us determine how to negate compound statements.   De Morgan's Laws   For any statements and ,    , and     .        The Law of the Double Negative   For any statement ,     "
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
  "body": " Truth Table for          T  T  T  F    T  F  F  T    F  T  F  T    F  F  F  T    "
},
{
  "id": "ch-chapter-1-connectives-4-6",
  "level": "2",
  "url": "ch-chapter-1-connectives-4.html#ch-chapter-1-connectives-4-6",
  "type": "Table",
  "number": "1.2.2",
  "title": "Truth Table for <span class=\"process-math\">\\((\\lnot p) \\lor (\\lnot q)\\)<\/span>",
  "body": " Truth Table for           T  T  F  F  F    T  F  F  T  T    F  T  T  F  T    F  F  T  T  T    "
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
  "body": " Conditional and Biconditional Statements  The last two logical connectives deal with implication.     Logical implication    The compound statement \"if , then \" or \" implies \" is called an implication or a conditional statement , denoted , where is referred to as the hypothesis or premise and is referred to as the conclusion . The implication is defined by the truth table below.   Truth Table for Implication         T  T  T    T  F  F    F  T  T    F  F  T     An implication in which the premise is false is called vacuously true .    You may be looking at the last two rows of the truth table and wondering what's going on. For lay people, the statement is meaningless when is false. But then wouldn't be a statement. Statements must have a truth value!   Consider the statement, \"If two is odd, then one is even.\" The constituent statements \"two is odd\" and \"one is even\" are both false, and the compound statement is defined to true. Any implication with the premise \"two is odd\" is vacuously true.   In formal mathematical logic, no causation in implied by an if-then statement. That is, the statement, \"If it's raining, then it's wet outside\" doesn't the same thing as, \"It's wet outside because it is raining.\" For all we know, it could be wet outside because someone sprayed everything down with a fire hose. And so, even though the statement, \"If , then Mars is a planet,\" is a true statement, we don't infer that the truth of the conclusion is dependent on its causal relationship to the premise (\"Mars is a planet\" is true regardless of arithmetic!).   Negating Implications   For any statements and ,    , and     .        We see from the truth tables for and that these statements are logically equivalent. Indeed, we have   Truth Table Verification for              T  T  T  F  F  F    T  F  F  T  T  T    F  T  T  F  F  F    F  F  T  F  T  F    as desired.  For the remaining equivalence, we have    There are three implications that are related to the statement , and they are defined as follows.    Let and be statements and consider the implication . The converse of is the statement . The inverse of is the statement . The contrapositive of is the statement .    Observe that the implication is logically equivalent to its contrapositive . The converse is logically equivalent to the inverse .   Let be the statement, \"It's raining,\" and be the statement, \"It's wet outside.\" Match the sentences to the correct compound statements.    Implication  If it's raining, then it's wet outside.    Converse of  If it's wet ouside, then it's raining.    Inverse of  If it's not raining, then it's not wet outside.    Contrapositive of  If it's not wet outside, then it's not raining.     Complete the truth table to verify the observations above.       Implication  Converse  Inverse  Contrapositive            T  T  T          T  F  F          F  T  T          F  F  T                                                                                    In addition to the conditional statement , there's another compound statement that we know well from mathematics.   >  biconditional    The biconditional of statements and is the compound statement \" if and only if ,\" denoted . It is defined by the truth table below.   Truth Table for Implication         T  T  T    T  F  F    F  T  F    F  F  T        Verify the logical equivalence .   Another way to express is, \" is necessary and sufficient for .\" In particular, \" is necessary for \" describes the implication , and \" is sufficient for \" describes the implication .   Mathematical Definitions are Biconditional Statements   A matrix is symmetric if and only if it equals its transpose.     The Contrapositive of the Biconditional   From the logical equivalences we've established, we see: This means that the biconditional is logically equivalent to its contrapositive.      A tautology is a compound statement that is true for all truth values of its constituent statements. A contradiction is a compound statement that is fall for all truth values of its constituent statements.     Verify that is a tautology and is a contradiction.   We refer to the tautology as the Law of the Excluded Middle .   Logical Rules of Inference   We can use implication to build logical rules of inference out of simpler statements. Here are two of the most common rules of inference.    Modus Ponens refers to the tautology .     Modus Tollens refers to the tautology .   These logical rules of inference allow us to construct arguments called proofs.    "
},
{
  "id": "def-implication",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#def-implication",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "   Logical implication    The compound statement \"if , then \" or \" implies \" is called an implication or a conditional statement , denoted , where is referred to as the hypothesis or premise and is referred to as the conclusion . The implication is defined by the truth table below.   Truth Table for Implication         T  T  T    T  F  F    F  T  T    F  F  T     An implication in which the premise is false is called vacuously true .   "
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
  "body": " We see from the truth tables for and that these statements are logically equivalent. Indeed, we have   Truth Table Verification for              T  T  T  F  F  F    T  F  F  T  T  T    F  T  T  F  F  F    F  F  T  F  T  F    as desired.  For the remaining equivalence, we have   "
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
  "body": " Let be the statement, \"It's raining,\" and be the statement, \"It's wet outside.\" Match the sentences to the correct compound statements.    Implication  If it's raining, then it's wet outside.    Converse of  If it's wet ouside, then it's raining.    Inverse of  If it's not raining, then it's not wet outside.    Contrapositive of  If it's not wet outside, then it's not raining.   "
},
{
  "id": "ch-chapter-1-connectives-5-13",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-13",
  "type": "Checkpoint",
  "number": "1.3.8",
  "title": "",
  "body": " Complete the truth table to verify the observations above.       Implication  Converse  Inverse  Contrapositive            T  T  T          T  F  F          F  T  T          F  F  T                                                                                    "
},
{
  "id": "def-biconditional",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#def-biconditional",
  "type": "Definition",
  "number": "1.3.10",
  "title": "",
  "body": "  >  biconditional    The biconditional of statements and is the compound statement \" if and only if ,\" denoted . It is defined by the truth table below.   Truth Table for Implication         T  T  T    T  F  F    F  T  F    F  F  T      "
},
{
  "id": "ch-chapter-1-connectives-5-16",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-16",
  "type": "Checkpoint",
  "number": "1.3.12",
  "title": "",
  "body": " Verify the logical equivalence .  "
},
{
  "id": "ch-chapter-1-connectives-5-18",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-18",
  "type": "Example",
  "number": "1.3.13",
  "title": "Mathematical Definitions are Biconditional Statements.",
  "body": " Mathematical Definitions are Biconditional Statements   A matrix is symmetric if and only if it equals its transpose.   "
},
{
  "id": "ch-chapter-1-connectives-5-19",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-19",
  "type": "Example",
  "number": "1.3.14",
  "title": "The Contrapositive of the Biconditional.",
  "body": " The Contrapositive of the Biconditional   From the logical equivalences we've established, we see: This means that the biconditional is logically equivalent to its contrapositive.   "
},
{
  "id": "def-tautology-contradiction",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#def-tautology-contradiction",
  "type": "Definition",
  "number": "1.3.15",
  "title": "",
  "body": "  A tautology is a compound statement that is true for all truth values of its constituent statements. A contradiction is a compound statement that is fall for all truth values of its constituent statements.   "
},
{
  "id": "ch-chapter-1-connectives-5-21",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-21",
  "type": "Checkpoint",
  "number": "1.3.16",
  "title": "",
  "body": " Verify that is a tautology and is a contradiction.  "
},
{
  "id": "ch-chapter-1-connectives-5-22",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#ch-chapter-1-connectives-5-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Law of the Excluded Middle "
},
{
  "id": "modus-ponens",
  "level": "2",
  "url": "ch-chapter-1-connectives-5.html#modus-ponens",
  "type": "Definition",
  "number": "1.3.17",
  "title": "Logical Rules of Inference.",
  "body": " Logical Rules of Inference   We can use implication to build logical rules of inference out of simpler statements. Here are two of the most common rules of inference.    Modus Ponens refers to the tautology .     Modus Tollens refers to the tautology .   These logical rules of inference allow us to construct arguments called proofs.   "
},
{
  "id": "sec-ch1-exercises",
  "level": "1",
  "url": "sec-ch1-exercises.html",
  "type": "Section",
  "number": "1.4",
  "title": "Exercises",
  "body": " Exercises   Given the statements below, write the following symbolic compound statements in sentences.   Statement : The car will not start.    Statement : It is freezing outside.    Statement : The food is ready.                               Given the statements above, write the following sentences in logical notation:   The car will start and it is freezing outside.    Either the food is ready or it is freezing outside.    The food isn't ready and the car won't start.       Construct a truth table for each of the following statements.    ;     ;     ;     .       Identify the hypothesis and the conclusion in each of the following conditional statements.   I will go to the movies if it rains.    If the diagonals of a rectangle are not perpendicular, it is not a square.    If and , then .     is a function on implies that is continuous on .    I will pay 5 dollars for a cup of coffee only if elephants fly.    All sides are equal provided that is an equilateral triangle.    Parellel opposite sides is sufficient for a quadrilateral to be a parallelogram.       Use truth tables to prove that disjunction and conjunction are associative and that each one distributes over the other. That is, for all statements , and , prove the following.                          Is implication associative? That is, are the compound statements and logically equivalent? Justify your answer!    Form the contrapositive, converse, and inverse of each of the following statements in the form of an English sentence (no symbolic logic notation)   If two lines are perpendicular, then they intersect at a right angle.    Function is differentiable provided that is a polynomial.    (Divergence Test) If converges, then .    For all matrices and , if and are both nonsingular, then is nonsingular.      "
},
{
  "id": "sec-ch1-exercises-2",
  "level": "2",
  "url": "sec-ch1-exercises.html#sec-ch1-exercises-2",
  "type": "Checkpoint",
  "number": "1.4.1",
  "title": "",
  "body": " Given the statements below, write the following symbolic compound statements in sentences.   Statement : The car will not start.    Statement : It is freezing outside.    Statement : The food is ready.                             "
},
{
  "id": "sec-ch1-exercises-3",
  "level": "2",
  "url": "sec-ch1-exercises.html#sec-ch1-exercises-3",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": " Given the statements above, write the following sentences in logical notation:   The car will start and it is freezing outside.    Either the food is ready or it is freezing outside.    The food isn't ready and the car won't start.     "
},
{
  "id": "sec-ch1-exercises-4",
  "level": "2",
  "url": "sec-ch1-exercises.html#sec-ch1-exercises-4",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "",
  "body": " Construct a truth table for each of the following statements.    ;     ;     ;     .     "
},
{
  "id": "sec-ch1-exercises-5",
  "level": "2",
  "url": "sec-ch1-exercises.html#sec-ch1-exercises-5",
  "type": "Checkpoint",
  "number": "1.4.4",
  "title": "",
  "body": " Identify the hypothesis and the conclusion in each of the following conditional statements.   I will go to the movies if it rains.    If the diagonals of a rectangle are not perpendicular, it is not a square.    If and , then .     is a function on implies that is continuous on .    I will pay 5 dollars for a cup of coffee only if elephants fly.    All sides are equal provided that is an equilateral triangle.    Parellel opposite sides is sufficient for a quadrilateral to be a parallelogram.     "
},
{
  "id": "sec-ch1-exercises-6",
  "level": "2",
  "url": "sec-ch1-exercises.html#sec-ch1-exercises-6",
  "type": "Checkpoint",
  "number": "1.4.5",
  "title": "",
  "body": " Use truth tables to prove that disjunction and conjunction are associative and that each one distributes over the other. That is, for all statements , and , prove the following.                        "
},
{
  "id": "sec-ch1-exercises-7",
  "level": "2",
  "url": "sec-ch1-exercises.html#sec-ch1-exercises-7",
  "type": "Checkpoint",
  "number": "1.4.6",
  "title": "",
  "body": " Is implication associative? That is, are the compound statements and logically equivalent? Justify your answer!  "
},
{
  "id": "sec-ch1-exercises-8",
  "level": "2",
  "url": "sec-ch1-exercises.html#sec-ch1-exercises-8",
  "type": "Checkpoint",
  "number": "1.4.7",
  "title": "",
  "body": " Form the contrapositive, converse, and inverse of each of the following statements in the form of an English sentence (no symbolic logic notation)   If two lines are perpendicular, then they intersect at a right angle.    Function is differentiable provided that is a polynomial.    (Divergence Test) If converges, then .    For all matrices and , if and are both nonsingular, then is nonsingular.     "
},
{
  "id": "sec-propositional-functions",
  "level": "1",
  "url": "sec-propositional-functions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Propositional Functions",
  "body": " Propositional Functions     simple propositional function     compound propositional function    A propositional function is a sentence that becomes a statement when ambiguity is removed. We denote a propositional function as if it results in a simple statement or if it results in a compound statement.      >  universal quantifier    Given a domain of discourse , a universal quantifier is the specification, for all in , or, for each in . It is denoted . The logical shorthand for a universally quantified statement is .      The statement, For all real numbers , is a universally quantified statement with a truth value of true. The statement, For all real numbers , is a real number is a universally quantified statement with a truth value of false.       existential quantifier     such that    Given a domain of discourse , an existential quantifier is the specification, there exists in , or, for some in . It is denoted . An existentially quantified statement takes the form, there exists in such that or for some in . The logical shorthand for an existentially quantified statement is .      The statement, There exists a real number such that is an existentially quantified statement with a truth value of true. The statement, There exists a real number such that is an existentially quantified statement with a truth value of false.    Are the following quantified statements true or false? Justify your answers.     For all real numbers and , .         There exist real numbers and such that .         For all real numbers , there exists a real number such that .         There exists a real number such that for all real numbers , .        "
},
{
  "id": "def-propfunc",
  "level": "2",
  "url": "sec-propositional-functions.html#def-propfunc",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "   simple propositional function     compound propositional function    A propositional function is a sentence that becomes a statement when ambiguity is removed. We denote a propositional function as if it results in a simple statement or if it results in a compound statement.   "
},
{
  "id": "def-universal-quantifier",
  "level": "2",
  "url": "sec-propositional-functions.html#def-universal-quantifier",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  >  universal quantifier    Given a domain of discourse , a universal quantifier is the specification, for all in , or, for each in . It is denoted . The logical shorthand for a universally quantified statement is .   "
},
{
  "id": "sec-propositional-functions-4",
  "level": "2",
  "url": "sec-propositional-functions.html#sec-propositional-functions-4",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  The statement, For all real numbers , is a universally quantified statement with a truth value of true. The statement, For all real numbers , is a real number is a universally quantified statement with a truth value of false.   "
},
{
  "id": "def-existential-quantifier",
  "level": "2",
  "url": "sec-propositional-functions.html#def-existential-quantifier",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": "   existential quantifier     such that    Given a domain of discourse , an existential quantifier is the specification, there exists in , or, for some in . It is denoted . An existentially quantified statement takes the form, there exists in such that or for some in . The logical shorthand for an existentially quantified statement is .   "
},
{
  "id": "sec-propositional-functions-6",
  "level": "2",
  "url": "sec-propositional-functions.html#sec-propositional-functions-6",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  The statement, There exists a real number such that is an existentially quantified statement with a truth value of true. The statement, There exists a real number such that is an existentially quantified statement with a truth value of false.   "
},
{
  "id": "sec-propositional-functions-7",
  "level": "2",
  "url": "sec-propositional-functions.html#sec-propositional-functions-7",
  "type": "Checkpoint",
  "number": "2.1.6",
  "title": "",
  "body": "Are the following quantified statements true or false? Justify your answers.     For all real numbers and , .         There exist real numbers and such that .         For all real numbers , there exists a real number such that .         There exists a real number such that for all real numbers , .       "
},
{
  "id": "sec-exercises",
  "level": "1",
  "url": "sec-exercises.html",
  "type": "Section",
  "number": "2.2",
  "title": "Exercises",
  "body": " Exercises  Let denote . Determine whether the following statement are true or false; justify your answer.            such that        such that ,        such that        Write down the negation of the following statements, moving the negation symbol as far to the right as possible. Use symbolic logic notation.         such that             Rewrite the following sentence using symbolic logic notation for the logical connectives and quantifiers ( denotes the set of all functions ).   For any function that is continuous on , there is some such that for all , .    "
},
{
  "id": "sec-exercises-2",
  "level": "2",
  "url": "sec-exercises.html#sec-exercises-2",
  "type": "Checkpoint",
  "number": "2.2.1",
  "title": "",
  "body": "Let denote . Determine whether the following statement are true or false; justify your answer.            such that        such that ,        such that      "
},
{
  "id": "sec-exercises-3",
  "level": "2",
  "url": "sec-exercises.html#sec-exercises-3",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "",
  "body": " Write down the negation of the following statements, moving the negation symbol as far to the right as possible. Use symbolic logic notation.         such that           "
},
{
  "id": "sec-exercises-4",
  "level": "2",
  "url": "sec-exercises.html#sec-exercises-4",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "",
  "body": " Rewrite the following sentence using symbolic logic notation for the logical connectives and quantifiers ( denotes the set of all functions ).   For any function that is continuous on , there is some such that for all , .   "
},
{
  "id": "sec-directproof",
  "level": "1",
  "url": "sec-directproof.html",
  "type": "Section",
  "number": "3.1",
  "title": "Direct Proofs",
  "body": " Direct Proofs  Let's recall the truth table for an implication.   Truth Table for Implication         T  T  T    T  F  F    F  T  T    F  F  T     Note that an implication is guaranteed to be true whenever the hypothesis is false. So, for a direct proof, we only need to worry about showing the implication is true when the hypothesis is true. Thus, our strategy becomes   Assume is true.    Use this assumption (and definitions, theorems, or previous results) to show that must be true, too.   Then, it follows that the truth value of the implication is true.   Claim. For all , if is even, then is even. (Recall that an integer is defined to be even provided there exists an integer for which . Otherwise, is odd, and there exists an integer for whic .)   Let . Assume is even. This means that there exists an integer for which . It follows that . Since , we see that is even.    "
},
{
  "id": "sec-directproof-3",
  "level": "2",
  "url": "sec-directproof.html#sec-directproof-3",
  "type": "Table",
  "number": "3.1.1",
  "title": "Truth Table for Implication",
  "body": " Truth Table for Implication         T  T  T    T  F  F    F  T  T    F  F  T    "
},
{
  "id": "sec-directproof-5",
  "level": "2",
  "url": "sec-directproof.html#sec-directproof-5",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": " Claim. For all , if is even, then is even. (Recall that an integer is defined to be even provided there exists an integer for which . Otherwise, is odd, and there exists an integer for whic .)   Let . Assume is even. This means that there exists an integer for which . It follows that . Since , we see that is even.   "
},
{
  "id": "sec-indirect-proofs",
  "level": "1",
  "url": "sec-indirect-proofs.html",
  "type": "Section",
  "number": "3.2",
  "title": "Indirect Proofs",
  "body": " Indirect Proofs   Proof by Contrapositive  Proof by contrapositive is a technique based on the logical equivalence . To show is true, we can show directly. Our strategy becomes   Assume is true (equivalently, assume is false).    Use this assumption (and definitions, theorems, or previous results) to show that must be true, too. (Equivalently, must be false.)   Then, it follows that the truth value of the implication is true.   Claim. For all , if is even, then is even.   Let . Assume is not even; this means that is odd. Thus there exists an integer for which . It follows that . Since , we see that is odd and therefore not even.      Proof by Contradiction  In a proof by contradiction, we show the statement is true by showing it cannot possibly be false (we're really invoking the Law of the Excluded Middle here). In other words, we assume that the entire implication is false, and then we show that this contradicts some other known result.  Remember that an implication is false exactly when the hypothesis is true and the conclusion is false. That is, by the Law of Implication (b), .   Claim. For all real numbers , if , then is irrational. (Recall that a number is rational provided there exist integers and sharing no common factor such that .)   Let . Seeking a contradiction, assume and is rational. Then by definition of rational, for some ( ) having no common factors. By assumpition, , which implies that . By Example (referenvce), we see that is even. That is, there exists such that . Then , so . By Example (ref), we have that is even, too. So there exists such that . But now and share a common factor of , and this is a contradiction.      Other Logical Equivalences  As our implications become more complicated, like , we will develop logical equivalences to make these statements easier to prove. Often this means moving the implication symbol as far to the right as possible so that we can assume as much as possible. Then, prove the new implication directly.  Having established in a previous exercise that , we can use this equivalence to prove the following statement.   Claim. For all integers and , if is even, then or is even.   Let and be integers. Assume the product is even but is not even. This means that there exist integers and for which and . It follows that , and isolating , we find . Since is an integer, it follows that is even.     "
},
{
  "id": "subsec-contrapositive-3",
  "level": "2",
  "url": "sec-indirect-proofs.html#subsec-contrapositive-3",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": " Claim. For all , if is even, then is even.   Let . Assume is not even; this means that is odd. Thus there exists an integer for which . It follows that . Since , we see that is odd and therefore not even.   "
},
{
  "id": "subsec-contradiction-4",
  "level": "2",
  "url": "sec-indirect-proofs.html#subsec-contradiction-4",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": " Claim. For all real numbers , if , then is irrational. (Recall that a number is rational provided there exist integers and sharing no common factor such that .)   Let . Seeking a contradiction, assume and is rational. Then by definition of rational, for some ( ) having no common factors. By assumpition, , which implies that . By Example (referenvce), we see that is even. That is, there exists such that . Then , so . By Example (ref), we have that is even, too. So there exists such that . But now and share a common factor of , and this is a contradiction.   "
},
{
  "id": "subsec-other-equiv-4",
  "level": "2",
  "url": "sec-indirect-proofs.html#subsec-other-equiv-4",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": " Claim. For all integers and , if is even, then or is even.   Let and be integers. Assume the product is even but is not even. This means that there exist integers and for which and . It follows that , and isolating , we find . Since is an integer, it follows that is even.   "
},
{
  "id": "sec-counterexamples",
  "level": "1",
  "url": "sec-counterexamples.html",
  "type": "Section",
  "number": "3.3",
  "title": "Counterexamples",
  "body": " Counterexamples  If you are asked to disprove a universally quantified statement, it's enough to exhibit a single counterexample. Indeed, remember that the negation of the statement is the statement .   Disprove: For all matrices with real entries, if is not the zero matrix, then is nonsingular.  It is not the case that every nonzero matrix with real entries is nonsingular. Indeed, the matrix has the property that for any matrix with entries , . Therefore, there is no matrix for which , so is singular.   "
},
{
  "id": "sec-counterexamples-3",
  "level": "2",
  "url": "sec-counterexamples.html#sec-counterexamples-3",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": " Disprove: For all matrices with real entries, if is not the zero matrix, then is nonsingular.  It is not the case that every nonzero matrix with real entries is nonsingular. Indeed, the matrix has the property that for any matrix with entries , . Therefore, there is no matrix for which , so is singular.  "
},
{
  "id": "sec-exercises-ch3",
  "level": "1",
  "url": "sec-exercises-ch3.html",
  "type": "Section",
  "number": "3.4",
  "title": "Exercises",
  "body": " Exercises  Use truth tables to prove that the statements below are tautologies.                   Let be a tautology (a statement that always has truth value ). Show that for any proposition , and .    If represents a contradiction (a statement that always has truth value ) and is any proposition, what can be said about and ?    Prove that for all statements , and , by (a) using a truth table and (b) stringing together previously established logical equivalences (be sure to cite each equivalence law you use).    The previous problem shows also that . Explain why this means you only need to prove one of those statements (not both!) to prove the original implication.   "
},
{
  "id": "sec-exercises-ch3-2",
  "level": "2",
  "url": "sec-exercises-ch3.html#sec-exercises-ch3-2",
  "type": "Checkpoint",
  "number": "3.4.1",
  "title": "",
  "body": "Use truth tables to prove that the statements below are tautologies.                 "
},
{
  "id": "sec-exercises-ch3-3",
  "level": "2",
  "url": "sec-exercises-ch3.html#sec-exercises-ch3-3",
  "type": "Checkpoint",
  "number": "3.4.2",
  "title": "",
  "body": " Let be a tautology (a statement that always has truth value ). Show that for any proposition , and .  "
},
{
  "id": "sec-exercises-ch3-4",
  "level": "2",
  "url": "sec-exercises-ch3.html#sec-exercises-ch3-4",
  "type": "Checkpoint",
  "number": "3.4.3",
  "title": "",
  "body": " If represents a contradiction (a statement that always has truth value ) and is any proposition, what can be said about and ?  "
},
{
  "id": "sec-exercises-ch3-5",
  "level": "2",
  "url": "sec-exercises-ch3.html#sec-exercises-ch3-5",
  "type": "Checkpoint",
  "number": "3.4.4",
  "title": "",
  "body": " Prove that for all statements , and , by (a) using a truth table and (b) stringing together previously established logical equivalences (be sure to cite each equivalence law you use).  "
},
{
  "id": "sec-exercises-ch3-6",
  "level": "2",
  "url": "sec-exercises-ch3.html#sec-exercises-ch3-6",
  "type": "Checkpoint",
  "number": "3.4.5",
  "title": "",
  "body": " The previous problem shows also that . Explain why this means you only need to prove one of those statements (not both!) to prove the original implication.  "
},
{
  "id": "ch-chapter-4-more-exercises",
  "level": "1",
  "url": "ch-chapter-4-more-exercises.html",
  "type": "Chapter",
  "number": "4",
  "title": "Challenging Exercises",
  "body": " Challenging Exercises These problems require creative thinking or build on results you have proved in other problems.  Statements (1) and (2) below are implicitly of the form . In this exercise, you will rewrite them to be explicitly of this form.   Using logical notation, rewrite each of statements (1) and (2) in this form, with appropriate domain of discourse , and appropriate propositional functions and (you may not want to use as the variable). You answer will look like with the blanks filled in appropriately.    Use part (a) to rewrite the statement, with moved as far to the right as possible. (Your answer should still use formal logic notation.)    Express the statement in (b) in as simple an English sentence as possible; i.e., it should not sound like it was produced by a logical negation machine. In this answer, you should have no formal logic notation.     Statement (1). Being nonzero is not a sufficient condition for an matrix to be nonsingular.  Statement (2). A consistent linear system doesn't necessarily have a unique solution. (Use to denote the set of all linear systems.)   Are the following pairs of statements logically equivalent? If yes, simply state Yes. If no, give an example in which one statement is true and the other is false, where the domain of discourse is the set of all Hamilton students. (You will have to decide what properties of students and represent. Be imaginative!)                          The logical connective exclusive-or is defined by Prove that , by showing that both are logically equivalent to . Do not use truth tables! Cite any equivalence laws you use by name!   "
},
{
  "id": "ch-chapter-4-more-exercises-2",
  "level": "2",
  "url": "ch-chapter-4-more-exercises.html#ch-chapter-4-more-exercises-2",
  "type": "Checkpoint",
  "number": "4.0.1",
  "title": "",
  "body": " Statements (1) and (2) below are implicitly of the form . In this exercise, you will rewrite them to be explicitly of this form.   Using logical notation, rewrite each of statements (1) and (2) in this form, with appropriate domain of discourse , and appropriate propositional functions and (you may not want to use as the variable). You answer will look like with the blanks filled in appropriately.    Use part (a) to rewrite the statement, with moved as far to the right as possible. (Your answer should still use formal logic notation.)    Express the statement in (b) in as simple an English sentence as possible; i.e., it should not sound like it was produced by a logical negation machine. In this answer, you should have no formal logic notation.     Statement (1). Being nonzero is not a sufficient condition for an matrix to be nonsingular.  Statement (2). A consistent linear system doesn't necessarily have a unique solution. (Use to denote the set of all linear systems.)  "
},
{
  "id": "ch-chapter-4-more-exercises-3",
  "level": "2",
  "url": "ch-chapter-4-more-exercises.html#ch-chapter-4-more-exercises-3",
  "type": "Checkpoint",
  "number": "4.0.2",
  "title": "",
  "body": "Are the following pairs of statements logically equivalent? If yes, simply state Yes. If no, give an example in which one statement is true and the other is false, where the domain of discourse is the set of all Hamilton students. (You will have to decide what properties of students and represent. Be imaginative!)                        "
},
{
  "id": "ch-chapter-4-more-exercises-4",
  "level": "2",
  "url": "ch-chapter-4-more-exercises.html#ch-chapter-4-more-exercises-4",
  "type": "Checkpoint",
  "number": "4.0.3",
  "title": "",
  "body": " The logical connective exclusive-or is defined by Prove that , by showing that both are logically equivalent to . Do not use truth tables! Cite any equivalence laws you use by name!  "
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
  "body": " Style  The authors...   use the appropriate LaTeX template for the course;  adhere to mathematical style conventions, such as:   using math mode for math symbols,  writing sentences that do not start in math mode,  not writing two-column proofs reminiscent of a high school geometry class,  using aligned equations when a string of equations is too long for a page,  using inline equations for minor mathematical manipulations,  using appropriate LaTeX environments (proof, prop*, example*, etc);    discern when to write an example instead of a proposition and proof;  adhere to the conventions of grammar;  write clearly and concisely in a way that does not obscure the logic or mathematics.   "
},
{
  "id": "examples",
  "level": "1",
  "url": "examples.html",
  "type": "Section",
  "number": "A.4",
  "title": "Examples (and how to write them)",
  "body": " Examples (and how to write them)  Here's a note about the difference between a proposition in math (versus formal logic). In math, we understand propositions (and theorems, lemmas, corollaries, etc.) to be statements that are true (and proved\/provable) so that we can cite them when we need to use them. You can see the confusion that would ensue if a paper contained Proposition 1: All even integers are prime under that assumption, even if followed immediately by a counterexample! So, if you are showing that a statement is not true as part of a writing assignment, here's what that might look like:   Example  It is not the case that every even integer is prime. Notice that the integer is even. Although divides , it divides neither nor . Therefore, by (definition of prime\/proposition about prime numbers\/whatever it is), is not prime.   To break that down into more of a template:   Example   [Topic sentence: what's the point of this example?]  [Supporting mathematical evidence, less formal than a proof, but still following the stylistic conventions of good mathematical writing!]  [Concluding sentence.]    "
},
{
  "id": "app-sets",
  "level": "1",
  "url": "app-sets.html",
  "type": "Appendix",
  "number": "B",
  "title": "Set Theory Basics",
  "body": " Set Theory Basics  Every set is made up of its members. If is a member of , we write , and we use the symbol as the mathematical equivalent of the phrase is a member of .  We think of sets as their own objects. If is another set, and if for every it follows that , then we say that is a subset of , and we write .  For example, is a subset of (i.e., ), but is not (i.e., ). From this definition, it is clear that a set is a subset of itself. We say that the sets and are equal (and we write ) if and only if and .  Just as arithmetic features operations on numbers, set theory features operations on sets:    The union of the sets and , denoted , is the set of all objects that are a member of , or , or both. Example:     The intersection of the sets and , denoted , is the set of all objects that are members of both and . Example:     There are lots of other operations on sets ( set difference , symmetric difference , Cartesian product , power set , disjoint union , complement , and more!), but to start, we only need to worry about unions and intersections.  Some basic sets of central importance to us in linear algebra are:    the empty set (the unique set containing no elements), which we denote by or ;    the set of natural numbers, which we denote by ;    the set of integers, which we denote by ;    the set of rational numbers, which we denote by ;    the set of real numbers, which we denote by ; and    the set of complex numbers, which we denote by .    "
},
{
  "id": "app-sets-3",
  "level": "2",
  "url": "app-sets.html#app-sets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subset "
},
{
  "id": "app-sets-6-1-1",
  "level": "2",
  "url": "app-sets.html#app-sets-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "union "
},
{
  "id": "app-sets-6-2-1",
  "level": "2",
  "url": "app-sets.html#app-sets-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intersection "
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
