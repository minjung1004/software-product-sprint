package com.google.sps.data;

/** An item on a todo list. */
public final class Contact {

  private final long id;
  private final String message;
  private final long timestamp;


  public Contact(long id, String message, long timestamp) {
    this.id = id;
    this.message = message;
    this.timestamp = timestamp;
  }
}