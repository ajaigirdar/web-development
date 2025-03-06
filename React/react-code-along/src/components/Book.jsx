import React, { useState, useEffect } from "react"
import '../App.css'

export default function Book({ book }) {
    return <li>{book.title} : {book.author}</li>;




}