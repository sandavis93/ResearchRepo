
package backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceRequestController {

    @GetMapping("/api/requests")
    public String getRequests() {
        return "Service Request Backend is working!";
    }
}