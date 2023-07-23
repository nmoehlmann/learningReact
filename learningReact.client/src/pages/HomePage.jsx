import React, { useState } from "react";
import { logger } from "../utils/Logger";
import { videosService } from "../services/VideosService";

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit} id="searchForm">
                  <input name="search"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  async function handleSubmit() {
    window.event.preventDefault()
    const formData = window.event.target
    logger.log(formData)
  }

}