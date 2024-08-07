import React from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import Message from "../message/Message";
function Main(props) {
  return (
    <section className={props.isActive ? " main main--sidebar-active" : "main"}>
      <header className="main__header">
        <TfiAlignRight
          className="icon"
          onClick={() => props.setIsActive((prev) => !prev)}
        />
        <b>Atarli.ai</b>
        <IoCreateOutline className="icon" onClick={props.createNewChat} />
      </header>

      <main className="main__content">
        {
          // <>
          //   <Message message="hello world" role="system" />
          //   <Message message="hello world" role="system" />
          //   <Message message="hello world" role="system" />
          //   <Message
          //     message={
          //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          //     }
          //     role="system"
          //   />
          //   <Message
          //     message={
          //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          //     }
          //     role="user"
          //   />
          // </>
        }

        <div className="main__content__input">
          <textarea name="" id="" placeholder="Atarlı ile mesajlaş" />
        </div>
      </main>
    </section>
  );
}

export default Main;
