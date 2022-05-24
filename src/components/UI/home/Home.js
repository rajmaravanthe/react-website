import React from "react";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className='background'>
      <h1>WORLD'S PREMIER FSI</h1>
      <h2>TECHONOLOGY & INNOVATION SERIES</h2>
      <div className={classes.content}>
        <div className={classes.items}>
          <div className={classes.subitems}>
            <p>CONTINENT</p>
            <p>2</p>
          </div>
          <div className={classes.subitems}>
            <p>CONTINENT</p>
            <p>2</p>
          </div>
          <div className={classes.subitems}>
            <p>CONTINENT</p>
            <p>2</p>
          </div>
          <div className={classes.subitems}>
            <p>CONTINENT</p>
            <p>2</p>
          </div>
          <div className={classes.subitems}>
            <p>CONTINENT</p>
            <p>2</p>
          </div>
        </div>
      </div>
      <div className={classes.textContent}>
        <div className={classes.subitems}>
          <div className={classes.main}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </div>
          <div className={classes.sub}>
            <div>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </div>
            <div>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available.
            </div>
            <div>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </div>
          </div>
        </div>
        <div className={classes.subitems}>
          <div className={classes.leftSub}>
            <div className={classes.redBorder}></div>
            <div>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
              <div className={classes.source}>Source</div>
              <div className={classes.source}>
                Source publishing and graphic
              </div>
            </div>
            <div>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
              <div className={classes.source}>Source</div>
              <div className={classes.source}>
                Source publishing and graphic
              </div>
            </div>
            <div>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
              <div className={classes.source}>Source</div>
              <div className={classes.source}>
                Source publishing and graphic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
