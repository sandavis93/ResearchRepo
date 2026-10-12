
package backend;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceRequestController {


    private final List<Map<String, String>> requests = new ArrayList<>();

    @GetMapping
    public List<Map<String, String>> getRequests() {
        return requests;
    }

    @PostMapping
    public Map<String, String> addRequest(
            @RequestBody Map<String, String> request) {

        requests.add(request);
        return request;
    }
    
    @DeleteMapping("/{index}")
    public void deleteRequest(@PathVariable int index) {
        if (index >= 0 && index < requests.size()) {
            requests.remove(index);
    }
    }   
}
