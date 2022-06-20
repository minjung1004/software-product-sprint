package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {
      int contactCounter = 0;

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
      contactCounter++;
      String name = Jsoup.clean(request.getParameter("name"), Safelist.none());
      String email = Jsoup.clean(request.getParameter("email"), Safelist.none());
      String message = Jsoup.clean(request.getParameter("message"), Safelist.none());
      long timestamp = System.currentTimeMillis();

      // Print the value so you can see it in the server logs.
      System.out.println("Contact: " + contactCounter);
      System.out.println("Name: " + name);
      System.out.println("Email: " + email);
      System.out.println("Message: " + message);
      
      // Write the value to the response so the user can see it.
      response.getWriter().println("Contact: " + contactCounter);
      response.getWriter().println("Name: " + name);      
      response.getWriter().println("Email: " + email);
      response.getWriter().println("Message: " + message);


      Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
      KeyFactory keyFactory = datastore.newKeyFactory().setKind("Contact");
      FullEntity contactEntity =
          Entity.newBuilder(keyFactory.newKey())
              .set("name", name)
              .set("email", email)
              .set("message", message)
              .set("timestamp", timestamp)
              .build();
      datastore.put(contactEntity);

      response.sendRedirect("/index.html");
  }
}