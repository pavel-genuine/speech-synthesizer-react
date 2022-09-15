// import SpeechNarrator from "speech-synthesizer-react";

import SpeechNarrator from "./SpeechSynthesizer";

function Sythesizer() {
  const text = `Today lets a simple discussion on two very basic and essential linear data structures every programmer should know… Array and Linked list

Before we get started, I’d want to say that if you find any mistakes or want to give more context to the conversation, please leave a comment.

Actually, it depends on the difference in the data storage technique and your needs which data structure would be appropriate for the particular case .

Array: Elements are stored in contiguous memory locations with addresses that are simple to calculate, allowing for quicker access to an element at a given index.

Linked List: Since elements in linked lists are typically not stored in close proximity to one another and their storage structures are less rigid, they must be stored with additional tags that refer to the subsequent element.


Some basic differences :

1. Arrays are stored in contiguous locations. Linked lists are not stored in a contiguous location, it is flexible.

2. Arrays are fixed in size. Data cannot be changed at runtime due to the possibility of overwriting other data because it can only be stored in contiguous blocks of memory in an array.

However, linked lists are dynamic in size. A linked list allows for data to reside in dispersed (non-contiguous) locations because each node points to the one after it. This enables a dynamic size that can alter at runtime.

3. In an array, memory is allocated at compile time. But in a linked list, memory is allocated at run time.

4. Array uses less memory than linked lists. Linked lists utilize extra memory for the same amount of entries since they also store a reference to the node after the current one. However, linked lists may utilize less memory overall because of their size flexibility.

5. In array elements can be accessed easily. In a linked list element accessing requires the traversal of the whole linked list.

6. Insertion and deletion operations take time in an array. But in linked list Insertion and deletion operations are faster.

Basically, for dynamic size and simplicity of insertion and deletion (better time complexity than array, only O(1) at head/tail and O(n) at specific position), linked lists give some advantages over the array. On the other hand, an array gives us the ease of random access to any element.

On the upcoming articles would like to discuss gradually more on linked lists variants: singly , doubly and circular and its basic operations : insertion and deletion atdifferent positions…`;
  return (
    <div style={{ width: "80%", margin: "auto", paddingTop: "5%" }}>
      <h1>Speech Sythesizer For React</h1>
      <SpeechNarrator text={text}></SpeechNarrator>
    </div>
  );
}

export default Sythesizer;
